import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section id="work" className="w-full min-h-screen px-4 md:px-margin-desktop py-20 border-b border-grid-line bg-background">
      <div className="mb-12 flex items-center gap-4">
        <span className="font-label-mono-bold text-label-mono-bold text-secondary">02 // WORK</span>
        <div className="h-px bg-grid-line flex-grow"></div>
        <span className="font-label-mono-sm text-label-mono-sm text-metadata-gray hidden md:block">STRUCTURAL_INDEX: {PROJECTS.length} RECORDS</span>
      </div>

      <h2 className="font-display-xl-mobile md:font-display-xl text-4xl md:text-display-xl mb-16 leading-[1.1] md:leading-[0.9]">
        Selected <span className="text-secondary italic">Projects</span>.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col border border-primary bg-paper-white hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(183,19,26,1)] transition-all duration-300 relative overflow-hidden"
          >
            {/* Tech Decoration */}
            <div className="absolute top-2 right-2 font-label-mono-sm text-[10px] text-metadata-gray z-10 bg-paper-white px-1 border border-grid-line">
              REF_{(index + 1).toString().padStart(3, '0')}
            </div>

            {/* Image */}
            <div className="w-full h-48 md:h-64 border-b border-primary relative overflow-hidden group-hover:opacity-90 transition-opacity bg-surface-dim">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors"></div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-6">
              <h3 className="font-headline-md text-2xl font-bold mb-4 uppercase tracking-tight group-hover:text-secondary transition-colors">
                {project.title}
              </h3>
              
              <p className="font-body-md text-on-surface-variant mb-6 flex-grow">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="font-label-mono-sm text-[10px] uppercase border border-metadata-gray/30 px-2 py-1 text-metadata-gray"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-label-mono-bold text-label-mono-bold uppercase border border-primary px-4 py-2 hover:bg-primary hover:text-white transition-colors w-fit"
              >
                ACCESS REPOSITORY
                <span className="material-symbols-outlined text-sm">north_east</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
