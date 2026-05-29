import { useState } from 'react';

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <main className="min-h-screen bg-[#050510] text-white">
      <section className="relative min-h-screen overflow-hidden px-8 py-6">
        <nav className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-lg font-semibold tracking-wide">Lidia Stepanova</div>

          <div className="flex gap-6 text-base text-white/70 md:absolute md:left-1/2 md:-translate-x-1/2 md:gap-8 md:text-lg">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>

        <div className="absolute inset-0 z-0">
          <video
            className={`absolute inset-0 h-full w-full object-cover object-top-left transition-opacity duration-1200 ${introFinished ? 'opacity-0' : 'opacity-100'
              }`}
            src="/videos/cyber-woman-intro.webm"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={() => setIntroFinished(true)}
          />

          <video
            className={`absolute inset-0 h-full w-full object-cover object-top-left transition-opacity duration-1200 ${introFinished ? 'opacity-100' : 'opacity-0'
              }`}
            src="/videos/cyber-woman-idle.webm"
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
          />

          <div className="absolute inset-0 bg-black/15" />
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

      </section>
    </main>
  );
}

export default App;