import Image from "next/image"

const concepts = [
  {
    id: 1,
    name: "Refractive Glass Cube",
    file: "/concepts/concept-1-cube.png",
    desc: "A photorealistic glass cube floating center-frame, splitting light into cyan/purple/gold prismatic streaks. Closest to your EVR reference.",
  },
  {
    id: 2,
    name: "Glowing Crystal Shards",
    file: "/concepts/concept-2-crystal.png",
    desc: "A faceted low-poly crystal glowing from within with neon light and a particle starfield. Ties into your circuit-style logo.",
  },
  {
    id: 3,
    name: "Iridescent Liquid Chrome",
    file: "/concepts/concept-3-torus.png",
    desc: "A glossy holographic liquid-metal torus knot with oil-slick reflections and thin orbital rings echoing the AVENTUS logo.",
  },
  {
    id: 4,
    name: "Prismatic Glass Wave",
    file: "/concepts/concept-4-wave.png",
    desc: "A flowing translucent glass ribbon refracting a smooth cyan-purple-gold gradient. Elegant and atmospheric.",
  },
]

export default function ConceptsPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 md:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            AVENTUS Hero Concepts
          </p>
          <h1 className="text-balance text-3xl font-bold text-foreground md:text-5xl">
            Choose your 3D hero direction
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Four cinematic directions adapted from your reference. Pick one (or mix elements) and I&apos;ll build it as
            real interactive 3D with glass refraction, bloom, and mouse parallax.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {concepts.map((c) => (
            <div
              key={c.id}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={c.file || "/placeholder.svg"}
                  alt={c.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={c.id <= 2}
                />
                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-lg font-bold text-foreground backdrop-blur">
                  {c.id}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-foreground">{c.name}</h2>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          Reply with <span className="font-semibold text-foreground">1, 2, 3, or 4</span> to pick a direction.
        </p>
      </div>
    </main>
  )
}
