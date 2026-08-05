import { motion } from "framer-motion";
import { prds } from "../data/prds";
import PRDCard from "./PRDCard";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.12,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export default function PRDSection() {
  return (
    <section id="product" className="relative py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
        >
          Product Thinking
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.55,
            delay: 0.1,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="text-[15px] text-neutral-400 leading-relaxed mb-10 max-w-2xl"
        >
          PRDs, teardowns, and product analyses showcasing how I think about
          user problems, prioritize features, and define measurable outcomes.
        </motion.p>

        <div className="grid gap-4">
          {prds.map((prd, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <PRDCard {...prd} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
