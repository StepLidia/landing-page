import { useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AboutContent } from '../components/AboutContent';
import { HeroContent } from '../components/HeroContent';

export function HomePage() {
  const [introFinished, setIntroFinished] = useState(false);
  const idleVideoRef = useRef<HTMLVideoElement>(null);
  const [searchParams] = useSearchParams();

  const activeSection = searchParams.get('section') ?? 'home';

  const contentPositionClass =
    activeSection === 'home'
      ? 'items-center'
      : 'items-start pt-16 md:pt-24';

  function handleIntroEnded() {
    setIntroFinished(true);
    idleVideoRef.current?.play();
  }

  return (
    <>
      <div className="absolute inset-0 z-0">
        <video
          className={`absolute inset-0 h-full w-full object-cover object-top-left transition-opacity duration-1200 ${introFinished ? 'opacity-0' : 'opacity-100'
            }`}
          src="/videos/cyber-woman-intro.webm"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleIntroEnded}
        />

        <video
          ref={idleVideoRef}
          className={`absolute inset-0 h-full w-full object-cover object-top-left transition-opacity duration-1200 ${introFinished ? 'opacity-100' : 'opacity-0'
            }`}
          src="/videos/cyber-woman-idle.webm"
          muted
          playsInline
          loop
          preload="auto"
        />

        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 bg-linear-to-r from-black/10 via-black/30 to-black/75" />
      </div>

      <div className={`relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-350 ${contentPositionClass}`}>
        <div className="ml-auto max-w-2xl">
          {activeSection === 'home' && <HeroContent />}
          {activeSection === 'about' && <AboutContent />}
          {activeSection === 'contact' && <div>Contact content later</div>}
        </div>
      </div>
    </>
  );
}
