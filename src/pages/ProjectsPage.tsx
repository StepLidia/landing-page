import { useState } from "react";
import { SeoMetadata } from "../components/SeoMetadata";
import { TechnologyBadges } from "../components/TechnologyBadges";

const projectCategories = ['All', 'Scientific', 'Financial', 'E-commerce', 'Management'] as const;

type ProjectCategory = typeof projectCategories[number];

type ProjectItemData = ProjectItemProps & {
  categories: ProjectCategory[];
};

const projectItems: ProjectItemData[] = [
  {
    image: "/images/growly.webp",
    title: "Growly - Financial calculator",
    websiteUrl: "https://swiss-growly.com",
    description: "Built a modern React-based financial planning platform featuring wealth forecasting, mortgage analysis, investment modeling, pension projections, and solar profitability estimation. Focused on interactive calculations and data visualization. Designed and implemented user-friendly planning tools that help individuals evaluate long-term financial outcomes under different assumptions and market conditions. Leveraged TypeScript, reusable React components, and responsive design principles to deliver a fast and engaging user experience.",
    technologies: ['React', 'Vite', 'TypeScript', 'Tailwind'],
    categories: ['Financial'],
  },
  {
    image: "/images/exlibris.webp",
    title: "Ex Libris E-Commerce Platform",
    websiteUrl: "https://www.exlibris.ch",
    description: "Worked on the backend systems and administrative tools supporting the day-to-day operation of a large online book retailer. Responsibilities included developing and maintaining .NET APIs, database design and optimization, supplier data integrations, and tools for importing, validating, and exporting large volumes of book metadata. Contributed to inventory management, order processing workflows, catalog synchronization, data quality improvements, and operational automation. Collaborated closely with business stakeholders to deliver reliable solutions supporting e-commerce operations, supplier onboarding, and internal administration processes.",
    technologies: ['C#', '.NET Core', 'TypeScript', 'Web API', 'SQL Server', 'EF Core', 'Docker', 'OpenShift'],
    categories: ['E-commerce'],
  },
  {
    image: "/images/comparis.webp",
    title: "Comparis Real Estate Lead Management Platform",
    websiteUrl: "https://en.comparis.ch/immobilien/verkaufen/immobilie-bewerten",
    description: "Worked on the backend systems powering Comparis' real estate lead management platform. The system handled the intake, distribution, tracking, and administrative management of property owner leads generated through online property valuation services. Developed APIs and business workflows responsible for processing incoming leads, matching them to partner realtors, managing lead lifecycles, and supporting operational processes through an ERP-style administration platform. Contributed to system reliability, data quality, workflow automation, and the integration of business-critical services supporting thousands of real estate transactions.",
    technologies: ['C#', '.NET Framework', 'TypeScript', 'Web API', 'SQL Server', 'EF Core', 'Docker', 'Azure'],
    categories: ['Management'],
  },
  {
    image: "/images/hbl.webp",
    title: "HBL Mortgage Management Platform",
    websiteUrl: "https://www.hbl.ch/de/private/finanzieren/hypotheken",
    description: "Contributed to the full-stack development of a mortgage management platform supporting the complete lifecycle of mortgage applications, from initial customer submission through assessment, approval, and contract preparation. Developed modern web-based workflows that replaced spreadsheet-driven processes, improving transparency, consistency, and operational efficiency across mortgage processing activities. Implemented business logic, financial calculations, document workflows, and user interfaces supporting both customer-facing and internal banking operations. Worked closely with business stakeholders to translate complex mortgage and lending requirements into reliable software solutions, focusing on usability, maintainability, and process automation within a highly regulated financial environment.",
    technologies: ['C#', '.NET Core', 'TypeScript', 'Web API', 'SQL Server', 'Docker', 'Azure', 'Azure DevOps'],
    categories: ['Financial', 'Management'],
  },
  {
    image: "/images/sensirion.webp",
    title: "Manufacturing Execution & Monitoring Systems",
    websiteUrl: "https://sensirion.com",
    description: "Contributed to the development of manufacturing software supporting the production of sensors in a semiconductor manufacturing environment. Developed full-stack ASP.NET MVC applications used by engineering and production teams to manage manufacturing workflows, production data, and operational processes, helping modernize and replace legacy MES functionality. Implemented backend services, database access layers, and SQL-based data processing solutions to support production operations, reporting, and system integration. Participated in application deployment and release activities using GitLab-based CI/CD processes. Worked closely with engineers and manufacturing specialists to deliver reliable software solutions for business-critical production systems.",
    technologies: ['C#', '.NET Framework', 'ASP.NET MVC', 'SQL Server', 'T-SQL', 'GitLab', 'HTML', 'JavaScript'],
    categories: ['Management'],
  },
  {
    image: "/images/fluxim.webp",
    title: "Optoelectronic Device Simulation Platform",
    websiteUrl: "https://www.fluxim.com",
    description: "Contributed to the development of scientific simulation software for OLED displays, solar cells, and optoelectronic devices. Developed ray-tracing and optical simulation modules, numerical optimization algorithms, and physics-based modeling tools used by researchers and engineers to analyze device performance and light propagation. Worked across C++, Java, Python, MATLAB, and OpenGL technologies in a multidisciplinary environment combining software engineering and applied physics.",
    technologies: ['C++', 'Java', 'Python', 'MATLAB', 'OpenGL', 'Qt'],
    categories: ['Scientific'],
  },
];

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');

  const filteredProjects = selectedCategory === 'All'
    ? projectItems
    : projectItems.filter((project) => project.categories.includes(selectedCategory));

  const projectsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Software Engineering Projects by Lidia Stepanova',
    description: 'Selected full-stack software engineering projects across financial planning, e-commerce, real estate, mortgage management, manufacturing systems, and scientific simulation.',
    hasPart: {
      '@type': 'ItemList',
      itemListElement: projectItems.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: project.title,
          description: project.description,
          url: project.websiteUrl,
          image: project.image,
          keywords: project.technologies.join(', '),
        },
      })),
    },
  };

  return (
    <div className="relative overflow-hidden">
      <SeoMetadata
        title="Projects | Lidia Stepanova"
        description="Selected software engineering projects by Lidia Stepanova, covering financial calculators, e-commerce platforms, real estate lead management, mortgage systems, manufacturing software, and scientific simulation."
        path="/projects"
        imagePath="/images/projects.webp"
        jsonLd={projectsJsonLd}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/projects.webp')",
          backgroundSize: 'auto',
          backgroundPosition: 'top center',
          backgroundRepeat: 'repeat'
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-linear-to-r from-black/10 via-black/70 to-black/85" />

      <div className="relative z-10 mx-auto mt-20 max-w-350 pb-24">
        <div className="flex flex-col items-start gap-4">
          <p className="inline-block bg-black/80 text-lg uppercase tracking-[0.35em] text-cyan-300/80">
            Projects
          </p>

          <div className="-ml-3 inline-flex max-w-full flex-wrap gap-3 rounded-2xl bg-black/75 p-3">
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-5 py-2 text-sm uppercase tracking-[0.35em] transition-colors ${selectedCategory === category
                  ? 'border-cyan-200/80 bg-cyan-300/30 text-cyan-50 shadow-lg shadow-cyan-500/20'
                  : 'border-cyan-300/30 bg-cyan-300/10 text-cyan-100/80 hover:border-cyan-200/60 hover:bg-cyan-300/20 hover:text-cyan-50'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-20 space-y-24">
          {filteredProjects.map((project) => (
            <ProjectItem key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

type ProjectItemProps = {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  websiteUrl?: string;
};

function ProjectItem({
  image,
  title,
  description,
  technologies,
  websiteUrl,
}: ProjectItemProps) {
  return (
    <article className="grid gap-10 md:grid-cols-[1fr_1.8fr] md:items-start">
      <div className="overflow-hidden rounded-4xl border border-white/10 bg-white/5 shadow-2xl">
        <img
          src={image}
          loading="lazy"
          alt={title}
          className="aspect-video h-auto w-full object-cover object-top-left"
        />
      </div>

      <div>
        <h2 className="text-3xl font-semibold">
          {title}
        </h2>

        {websiteUrl && (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block break-all text-lg text-cyan-300 transition-colors hover:text-cyan-200"
          >
            {websiteUrl.replace('https://', '')} ↗
          </a>
        )}

        <p className="mt-5 text-lg text-justify leading-8 text-white/80">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <TechnologyBadges technologies={technologies} />
        </div>
      </div>
    </article>
  );
}
