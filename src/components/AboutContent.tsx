export function AboutContent() {
  const technologies = [
    '.NET',
    'React',
    'TypeScript',
    'Tailwind',
    'SQL Server',
    'EF Core',
    'Azure',
    'Docker',
    'Kubernetes',
    'Linux',
    'Python',
  ];

  return (
    <>
      <h1 className="text-3xl font-semibold leading-tight">
        Biography and experience
      </h1>

      <p className="mt-6 text-justify text-lg leading-8 text-white/70">
        I'm a full-stack software engineer with more than 10 years of professional
        experience designing and building modern software systems. I hold a Master's
        degree from EPFL and have worked on projects ranging from scientific and
        engineering applications to enterprise-grade financial, real estate and e-commerce
        platforms.
      </p>

      <p className="mt-6 text-justify text-lg leading-8 text-white/70">
        Throughout my career, I have developed solutions using .NET, Entity Framework
        Core, SQL Server, React, TypeScript, JavaScript, Tailwind CSS, Docker,
        Kubernetes, Azure, and modern DevOps practices. My experience spans both
        backend and frontend development across Windows and Linux environments,
        including testing, cloud infrastructure, project delivery, and system design.
      </p>

      <p className="mt-6 text-justify text-lg leading-8 text-white/70">
        I enjoy analytical and numerical challenges, designing reliable architectures,
        and building practical engineering systems that solve real-world problems.
        Whether working on scientific software, financial platforms, e-commerce
        solutions, or personal projects, I focus on creating maintainable,
        high-quality software with long-term value.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              border
              border-cyan-400/30
              bg-cyan-400/10
              px-4
              py-2
              text-sm
              text-cyan-200
              shadow-[0_0_20px_rgba(34,211,238,0.15)]
              backdrop-blur
              transition-all
              hover:border-cyan-300/60
              hover:bg-cyan-400/20
              hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
          >
            {tech}
          </span>
        ))}
      </div>
    </>
  )
}