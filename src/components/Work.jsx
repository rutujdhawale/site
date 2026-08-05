import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { ExternalLink } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.1,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export default function Work() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
        >
          Selected Work
        </motion.h2>

        <div className="divide-y divide-neutral-800/60">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="py-8 group cursor-default work-card"
            >
              {/* Title row */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-lg font-semibold text-white group-hover:text-neutral-200 transition-colors">
                  {project.title}
                </h3>
                <span className="text-sm text-neutral-500 whitespace-nowrap">
                  {project.category}
                </span>
              </div>

              {/* Description */}
              <p className="text-[15px] text-neutral-400 leading-relaxed mb-4 max-w-2xl">
                {project.description}
              </p>

              {/* Tech tags + links row */}
              <div className="flex items-center justify-between gap-4 flex-wrap">
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-neutral-500 flex items-center gap-1.5 group-hover:text-neutral-400 transition-colors duration-300"
                    >
                      <span className="text-neutral-600">⚙</span>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project links */}
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="project-link inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-white transition-colors duration-200"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="project-link inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-white transition-colors duration-200"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink size={14} />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
