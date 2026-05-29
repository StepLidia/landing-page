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
    </>
  )
}