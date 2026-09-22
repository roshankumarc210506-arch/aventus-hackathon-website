'use client'

import { useEffect, useState } from 'react'

/**
 * Returns normalized pointer position in the range [-1, 1] on both axes,
 * measured from the center of the viewport. Used for cursor-driven parallax.
 */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function handleMove(event: PointerEvent) {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = (event.clientY / window.innerHeight) * 2 - 1
      setPosition({ x, y })
    }

    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [])

  return position
}
