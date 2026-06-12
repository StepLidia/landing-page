import { useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AboutContent } from '../components/AboutContent';
import { HeroContent } from '../components/HeroContent';
import { CollaborationContent } from '../components/CollaborationContent';
import { ContactContent } from '../components/ContactContent';
import { SeoMetadata } from '../components/SeoMetadata';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Lidia Stepanova',
  jobTitle: 'Full-Stack Software Engineer',
  url: '/',
  knowsAbout: [
    '.NET',
    'React',
    'TypeScript',
    'SQL Server',
    'Azure',
    'Docker',
    'Kubernetes',
    'Scientific software',
    'Financial platforms',
    'E-commerce systems',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Ecole Polytechnique Federale de Lausanne',
  },
};

const sectionMetadata = {
  home: {
    title: 'Lidia Stepanova | Full-Stack Software Engineer',
    description: 'Personal portfolio of Lidia Stepanova, a full-stack software engineer designing and building modern web applications, financial tools, scientific software, and business systems.',
    path: '/',
  },
  about: {
    title: 'About Lidia Stepanova | Full-Stack Software Engineer',
    description: 'Learn about Lidia Stepanova, a full-stack software engineer with 10+ years of experience across .NET, React, TypeScript, SQL Server, Azure, Docker, and scientific software.',
    path: '/?section=about',
  },
  collaboration: {
    title: 'Custom Software Collaboration | Lidia Stepanova',
    description: 'Custom web applications, APIs, business tools, cloud-ready systems, and modern websites tailored to practical operational needs.',
    path: '/?section=collaboration',
  },
  contact: {
    title: 'Contact Lidia Stepanova | Software Engineering',
    description: 'Contact Lidia Stepanova for software engineering collaboration, custom business applications, React and .NET development, APIs, and cloud-ready systems.',
    path: '/?section=contact',
  },
} as const;

type HomeSection = keyof typeof sectionMetadata;

function getHomeSection(section: string): HomeSection {
  return section in sectionMetadata ? section as HomeSection : 'home';
}

export function HomePage() {
  const [introFinished, setIntroFinished] = useState(false);
  const idleVideoRef = useRef<HTMLVideoElement>(null);
  const [searchParams] = useSearchParams();

  const activeSection = getHomeSection(searchParams.get('section') ?? 'home');
  const metadata = sectionMetadata[activeSection];

  function handleIntroEnded() {
    setIntroFinished(true);
    idleVideoRef.current?.play();
  }

  return (
    <>
      <SeoMetadata
        title={metadata.title}
        description={metadata.description}
        path={metadata.path}
        jsonLd={personJsonLd}
      />

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

      <div className={`relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-350 items-start pt-16 md:pt-24`}>
        <div className="ml-auto w-full max-w-2xl">
          {activeSection === 'home' && <HeroContent />}
          {activeSection === 'about' && <AboutContent />}
          {activeSection === 'collaboration' && <CollaborationContent />}
          {activeSection === 'contact' && <ContactContent />}
        </div>
      </div>
    </>
  );
}
