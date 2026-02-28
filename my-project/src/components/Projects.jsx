import { PROJECTS } from "../constants";
import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center text-4xl font-light tracking-tight text-neutral-100"
      >
        My <span className="font-normal text-purple-400">Projects</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -6 }}
            className="flex flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/30 backdrop-blur-sm transition-all hover:border-purple-500/40 hover:bg-neutral-900/80 shadow-lg group"
          >
            {/* Project Image Container */}
            <div className="relative h-44 w-full overflow-hidden bg-neutral-800">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
            </div>

            {/* Project Content */}
            <div className="flex flex-1 flex-col p-5">
              <div className="mb-2 flex items-start justify-between gap-2">
                <h3 className="text-md font-semibold text-neutral-100 tracking-tight leading-tight group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-neutral-800 p-2 text-neutral-400 hover:bg-purple-500 hover:text-white transition-all shadow-sm"
                  title="Visit Website"
                >
                  <FiArrowUpRight size={14} />
                </a>
              </div>

              <p className="mb-4 text-xs leading-relaxed text-neutral-400 line-clamp-2">
                {project.description}
              </p>

              {/* Technologies Badges */}
              <div className="mt-auto flex flex-wrap gap-1.5">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded bg-neutral-800/80 px-2 py-0.5 text-[10px] font-medium text-pink-300 border border-neutral-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
