import { useState } from 'react';
import { HeroContent } from './components/HeroContent';
import { AboutContent } from './components/AboutContent';

function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const contentPositionClass = activeSection === 'home' ? 'items-center' : 'items-start pt-16 md:pt-24';

  return (
    <main className="min-h-screen bg-[#050510] text-white">
      <section className="relative min-h-screen overflow-hidden px-8 py-6">
        <nav className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div
            onClick={() => setActiveSection('home')}
            className="cursor-pointer text-lg font-semibold tracking-wide transition-colors hover:text-cyan-300"
          >
            Lidia Stepanova
          </div>

          <div className="flex gap-6 text-base text-white/70 md:absolute md:left-1/2 md:-translate-x-1/2 md:gap-8 md:text-lg">
            <button
              onClick={() => setActiveSection('about')}
              className="hover:text-white"
            >
              About
            </button>
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

        <div className={`relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-350 ${contentPositionClass}`}>

          <div className=" ml-auto max-w-2xl">
            {activeSection === 'home' && <HeroContent />}
            {activeSection === 'about' && <AboutContent />}
          </div>
        </div>

      </section>
    </main>
  );
}

export default App;