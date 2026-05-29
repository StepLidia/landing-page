export function ProjectsPage() {
  return (
    <div className="relative z-10 mx-auto mt-20 max-w-350 pb-24">
      <p className="mb-5 text-sm uppercase tracking-[0.35em] text-cyan-300/80">
        Projects
      </p>

      <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
        Selected engineering and creative work
      </h1>

      <div className="mt-20 space-y-24">
        <ProjectItem
          image="/images/exlibris.png"
          title="Solar Profitability Estimator"
          description="A web application for estimating solar panel profitability, focused on practical engineering assumptions, financial modelling, and clear user-facing calculations."
          technologies={['.NET', 'React', 'TypeScript', 'SQL Server', 'Docker']}
        />

        <ProjectItem
          image="/images/comparis.png"
          title="Personal Cyber Landing Page"
          description="A cinematic personal landing page combining React, Tailwind CSS, AI-generated video, responsive layout, and modern cyberpunk-inspired visual design."
          technologies={['React', 'Vite', 'Tailwind CSS', 'TypeScript']}
        />
      </div>
    </div>
  );
}

type ProjectItemProps = {
  image: string;
  title: string;
  description: string;
  technologies: string[];
};

function ProjectItem({
  image,
  title,
  description,
  technologies,
}: ProjectItemProps) {
  return (
    <article className="grid gap-10 md:grid-cols-2 md:items-center">
      <div className="overflow-hidden rounded-4xl border border-white/10 bg-white/5 shadow-2xl">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div>
        <h2 className="text-3xl font-semibold">
          {title}
        </h2>

        <p className="mt-5 text-lg leading-8 text-white/80">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.15)] backdrop-blur"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}