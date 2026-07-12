import { motion } from "framer-motion";
import { projects } from "../data/projects";

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
              className="py-8 group cursor-default"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
