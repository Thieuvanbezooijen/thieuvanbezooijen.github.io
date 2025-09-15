import './index.css'

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-block rounded-full bg-foreground/90 text-background text-[11px] tracking-wide px-2 py-1 font-semibold">
      {children}
    </span>
  )
}

function Divider() {
  return <div className="w-full h-14 bg-neutral-800" />
}

function Hero() {
  return (
    <section className="bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Tag>INTERACTIVE DESIGNER</Tag>
          <h1 className="font-extrabold text-5xl md:text-7xl leading-tight">
            Hallo, Ik ben
            <br />
            Thieu van Bezooiijen
          </h1>
          <p className="text-muted text-lg max-w-prose">
            Ik ontwerp en ontwikkel moderne, toegankelijke webervaringen met focus op eenvoud,
            performance en een consistente visuele identiteit.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="w-full max-w-sm aspect-[4/5] bg-card rounded-2xl overflow-hidden">
            <img className="w-full h-full object-cover hover:scale-[1.02] transition-transform" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop" alt="Profiel" />
          </div>
          <div className="w-full max-w-sm text-sm text-muted">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1">
              <li className="col-span-2"><span className="text-foreground">E-mail:</span> thieu@example.com</li>
              <li><span className="text-foreground">GitHub:</span> @thieuvb</li>
              <li><span className="text-foreground">Locatie:</span> NL</li>
              <li className="col-span-2"><span className="text-foreground">Instagram:</span> @thieu.design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Portfolio() {
  return (
    <section className="bg-neutral-100 text-black">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h3 className="text-sm uppercase tracking-wide text-neutral-600">Tussen Aanhalingstekens</h3>
              <span className="inline-block rounded-full bg-black text-white text-[10px] tracking-wider px-2 py-0.5">GRAPHIC DESIGN</span>
            </div>
            <p className="text-neutral-700 max-w-prose">
              Posterreeks en drukwerk met sterke typografie en experimentele compositie. Focus op visuele
              spanning en helder ritme.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <img className="rounded-2xl w-full aspect-[3/4] object-cover hover:scale-[1.01] transition-transform" src="https://images.unsplash.com/photo-1520977431540-6c1d909c27e6?q=80&w=1200&auto=format&fit=crop" alt="Poster 1" />
            <img className="rounded-2xl w-full aspect-[3/4] object-cover hover:scale-[1.01] transition-transform" src="https://images.unsplash.com/photo-1512399400046-302b0b094ea1?q=80&w=1200&auto=format&fit=crop" alt="Poster 2" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              “Visuele identiteit en beleving”
            </h2>
            <span className="inline-block rounded-full bg-black text-white text-[10px] tracking-wider px-2 py-0.5">GRAPHIC DESIGN</span>
            <p className="text-neutral-700 text-sm max-w-prose">
              Van merkstrategie tot uitvoering: app-mockups, flyers en kaartjes. Consistente grid, sterke
              contrasten en subtiele micro-animaties.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img className="rounded-xl w-full aspect-[10/16] object-cover hover:scale-[1.01] transition-transform" src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop" alt="App Screen" />
            <img className="rounded-xl w-full aspect-[10/16] object-cover hover:scale-[1.01] transition-transform" src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1200&auto=format&fit=crop" alt="Flyer" />
            <img className="rounded-xl w-full aspect-[10/16] object-cover hover:scale-[1.01] transition-transform" src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=1200&auto=format&fit=crop" alt="Card" />
            <img className="rounded-xl w-full aspect-[10/16] object-cover hover:scale-[1.01] transition-transform" src="https://images.unsplash.com/photo-1564869735322-c99b45c6c703?q=80&w=1200&auto=format&fit=crop" alt="Card 2" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <main className="font-sans">
      <Hero />
      <Divider />
      <Portfolio />
    </main>
  )
}
