import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <section className="w-full px-4 md:px-margin-desktop py-20 border-b border-grid-line bg-background relative overflow-hidden">
      <div className="mb-12 flex items-center gap-4">
        <span className="font-label-mono-bold text-label-mono-bold text-secondary">03 // EDUCATION & EXPERIENCE</span>
        <div className="h-px bg-grid-line flex-grow"></div>
      </div>

      <h2 className="font-display-xl-mobile md:font-display-xl text-4xl md:text-display-xl mb-16 leading-[1.1] md:leading-[0.9]">
        Structural <span className="text-secondary italic">Timeline</span>.
      </h2>

      <div className="relative border-l border-primary ml-4 md:ml-8 pl-8 md:pl-12 py-4">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-16 relative group">
            {/* Timeline Node */}
            <div className="absolute -left-[41px] md:-left-[57px] top-0 w-4 h-4 bg-paper-white border-2 border-primary rounded-full group-hover:border-secondary transition-colors z-10"></div>
            <div className="absolute -left-[41px] md:-left-[57px] top-0 w-4 h-4 bg-secondary rounded-full animate-ping opacity-0 group-hover:opacity-20 z-0"></div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-12">
              {/* Year */}
              <div className="w-full md:w-1/4">
                <p className="font-label-mono-bold text-label-mono-bold text-metadata-gray bg-grid-line/10 px-3 py-1 inline-block border border-grid-line">
                  {experience.year}
                </p>
              </div>

              {/* Content */}
              <div className="w-full md:w-3/4">
                <h3 className="font-headline-md text-xl md:text-2xl font-bold mb-2 text-primary uppercase">
                  {experience.role}
                </h3>
                <h4 className="font-label-mono-bold text-sm text-secondary mb-4 uppercase">
                  @ {experience.company}
                </h4>
                
                <p className="font-body-md text-on-surface-variant mb-6 leading-relaxed max-w-2xl">
                  {experience.description}
                </p>
                
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {experience.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="font-label-mono-sm text-[10px] uppercase border border-primary px-2 py-1 text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;