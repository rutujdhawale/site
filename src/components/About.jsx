import { motion } from "framer-motion";
import { technologies } from "../data/technologies";
import TechBadge from "./TechBadge";

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <motion.div
        className="max-w-3xl mx-auto px-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl font-bold text-white mb-10"
        >
          About
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-neutral-400 text-[15px] sm:text-base leading-relaxed mb-12 max-w-2xl"
        >
          I&apos;m a software engineer who thrives at the intersection of web dev and AI. I love
          dissecting complex, real-world problems and shipping clean, reliable systems that people
          actually use. Whether it&apos;s architecting a full-stack platform, building intelligent automations, or
          crafting a pixel-perfect interface — I&apos;m driven by the craft of building things that matter.
        </motion.p>

        <motion.div variants={itemVariants}>
          <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 font-medium mb-5">
            Technologies
          </p>
          <div className="flex flex-wrap gap-2.5">
            {technologies.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.03,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
              >
                <TechBadge name={tech.name} icon={tech.icon} color={tech.color} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-10"
        >
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-300 hover:text-white transition-colors duration-200 underline underline-offset-4 decoration-neutral-600 hover:decoration-neutral-400"
          >
            View Resume →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
