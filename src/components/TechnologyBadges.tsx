type TechnologyBadgesProps = {
  technologies: string[];
};

export function TechnologyBadges({
  technologies,
}: TechnologyBadgesProps) {
  return (
    <>
      {technologies.map((technology) => (
        <span
          key={technology}
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
              hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]">
          {technology}
        </span>
      ))}
    </>
  );
}
