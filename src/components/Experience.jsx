import { motion } from "framer-motion";
import { experiences } from "../data/experience";
import ExperienceCard from "./ExperienceCard";

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: i * 0.12,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
        >
          Experience
        </motion.h2>

        <div className="divide-y divide-neutral-800/60">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <ExperienceCard {...exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
