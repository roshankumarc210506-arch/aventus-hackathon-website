'use client'

import { useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
  Vignette,
} from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import * as THREE from 'three'

function Starfield({ count = 3200 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null)

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const cool = new THREE.Color('#9fd8ff')
    const warm = new THREE.Color('#ffe3b0')
    const white = new THREE.Color('#ffffff')
    for (let i = 0; i < count; i++) {
      const radius = 12 + Math.random() * 40
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = radius * Math.cos(phi)

      const pick = Math.random()
      const c = pick < 0.7 ? white : pick < 0.85 ? cool : warm
      col[i * 3] = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
    }
    return { positions: pos, colors: col }
  }, [count])

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.012
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

const diskVertexShader = /* glsl */ `
  varying vec3 vPos;
  void main() {
    vPos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const diskFragmentShader = /* glsl */ `
  uniform float uTime;
  uniform vec3 uColorHot;
  uniform vec3 uColorMid;
  uniform vec3 uColorEdge;
  uniform float uInner;
  uniform float uOuter;
  varying vec3 vPos;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float amp = 0.5;
    for (int i = 0; i < 4; i++) {
      v += amp * noise(p);
      p *= 2.0;
      amp *= 0.5;
    }
    return v;
  }

  void main() {
    float r = length(vPos.xy);
    float t = clamp((r - uInner) / (uOuter - uInner), 0.0, 1.0);
    float angle = atan(vPos.y, vPos.x);

    // Turbulent gas swirl, dragged around the disk over time
    float swirl = fbm(vec2(angle * 4.0 + uTime * 0.5, r * 3.0 - uTime * 0.9));

    // Radial brightness: hottest near the inner edge
    float radial = pow(1.0 - t, 1.6);

    // Doppler beaming: one side rushes toward the viewer and brightens
    float doppler = 0.35 + 0.9 * (0.5 + 0.5 * sin(angle + 0.6));

    float brightness = radial * doppler * (0.55 + 0.75 * swirl);

    // Color gradient from white-hot core to deep ember edge
    vec3 col = mix(uColorHot, uColorMid, smoothstep(0.0, 0.45, t));
    col = mix(col, uColorEdge, smoothstep(0.45, 1.0, t));

    // Soften the inner and outer boundaries
    float edgeFade = smoothstep(0.0, 0.06, t) * smoothstep(1.0, 0.8, t);
    float alpha = clamp(brightness, 0.0, 1.0) * edgeFade;

    gl_FragColor = vec4(col * brightness * 1.8, alpha);
  }
`

function AccretionDisk({
  rotation,
}: {
  rotation: [number, number, number]
}) {
  const matRef = useRef<THREE.ShaderMaterial>(null)

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorHot: { value: new THREE.Color('#fff4d6') },
      uColorMid: { value: new THREE.Color('#ff8a2b') },
      uColorEdge: { value: new THREE.Color('#5c1a00') },
      uInner: { value: 1.55 },
      uOuter: { value: 4.6 },
    }),
    [],
  )

  useFrame((state) => {
    if (matRef.current) {
      matRef.current.uniforms.uTime.value = state.clock.elapsedTime
    }
  })

  return (
    <mesh rotation={rotation}>
      <ringGeometry args={[1.55, 4.6, 256, 1]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={diskVertexShader}
        fragmentShader={diskFragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  )
}

function BlackHole() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += delta * 0.05
    }
  })

  return (
    <group>
      {/* Event horizon — pure black sphere that writes depth to occlude the far disk */}
      <mesh>
        <sphereGeometry args={[1.35, 64, 64]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* Photon ring — thin blazing rim hugging the event horizon */}
      <mesh>
        <torusGeometry args={[1.5, 0.02, 16, 200]} />
        <meshBasicMaterial color="#ffdca0" toneMapped={false} />
      </mesh>

      <group ref={groupRef}>
        {/* Main disk, seen nearly edge-on */}
        <AccretionDisk rotation={[1.42, 0, 0]} />
      </group>

      {/* Lensed halo: the same disk bent up and over the top and bottom */}
      <group rotation={[0, 0, Math.PI / 2]}>
        <AccretionDisk rotation={[1.42, 0, 0]} />
      </group>
    </group>
  )
}

function Rig() {
  const { camera, pointer } = useThree()

  useFrame(() => {
    camera.position.lerp(
      new THREE.Vector3(pointer.x * 1.4, 1.1 + pointer.y * 0.9, 11),
      0.04,
    )
    camera.lookAt(0, 0, 0)
  })

  return null
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.1, 11], fov: 50 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.15} />

      <Starfield />
      <BlackHole />
      <Rig />

      <EffectComposer>
        <Bloom
          intensity={1.5}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={[0.0006, 0.001]}
          radialModulation={false}
          modulationOffset={0}
        />
        <Vignette eskil={false} offset={0.25} darkness={0.9} />
      </EffectComposer>
    </Canvas>
  )
}
