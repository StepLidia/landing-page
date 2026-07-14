import { Link } from 'react-router-dom';
import { CyberTerminal } from './CyberTerminal';

export function HeroContent() {
  return (
    <>
      <p className="mb-5 text-lg uppercase tracking-[0.35em] text-cyan-500/80">
        Software Engineer
      </p>

      <h1 className="text-3xl font-semibold leading-tight">
        Building digital systems of the future.
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
        Personal page for software engineering, AI experiments,
        scientific ideas and visual digital projects.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          to="/projects"
          className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90"
        >
          View projects
        </Link>
        <a
          href="/misc/CV_Homepage.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/20 bg-white/10 shadow-2xl backdrop-blur"
        >
          Download CV ↓
        </a>
        <Link
          to="/?section=contact"
          className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/80 transition-colors hover:bg-white/20 bg-white/10 shadow-2xl backdrop-blur"
        >
          Contact me
        </Link>
      </div>

      <div className="mt-10 max-w-xl min-h-60 rounded-3xl border border-white/20 bg-black/50 p-5 shadow-2xl backdrop-blur">
        <CyberTerminal />
      </div>
    </>
  )
}
