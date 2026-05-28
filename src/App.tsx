function App() {
  return (
    <main className="min-h-screen bg-[#050510] text-white">
      <section className="relative min-h-screen overflow-hidden px-8 py-6">
        <nav className="relative z-10 flex items-center justify-between">
          <div className="text-lg font-semibold tracking-wide">Lidia Stepanova</div>

          <div className="absolute left-1/2 flex -translate-x-1/2 gap-8 text-lg text-white/70">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>

        </nav>

        <div className="absolute inset-0 z-0">
          <video
            className="h-full w-full object-cover"
            src="/videos/cyber-woman-intro.webm"
            autoPlay
            muted
            playsInline
          />

          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-linear-to-r from-black/10 via-black/30 to-black/75" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-350 items-center">

          <div className=" ml-auto max-w-2xl">
            <p className="mb-5 text-lg uppercase tracking-[0.35em] text-cyan-500/80">
              Software Engineer
            </p>

            <h1 className="text-3xl font-semibold leading-tight">
              Building digital systems of the future.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
              Personal landing page for software engineering, AI experiments,
              scientific ideas, and visual digital projects.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black">
                View projects
              </a>
              <a className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/80 hover:bg-white/10">
                Contact me
              </a>
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />
      </section>
    </main>
  );
}

export default App;