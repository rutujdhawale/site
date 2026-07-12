import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ChevronDown } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";

// Stagger container variant
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

// Individual word variant
const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

// Helper: split text into animated words
function AnimatedWords({ text, className }) {
  const words = text.split(" ");
  return (
    <motion.span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Aceternity Background Beams */}
      <BackgroundBeams className="absolute inset-0 z-0" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.p
          variants={wordVariants}
          className="text-neutral-400 text-base mb-4"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name with gradient breathing animation */}
        <motion.h1
          variants={wordVariants}
          className="hero-name text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-r from-neutral-500 via-white to-neutral-400 bg-[length:200%_100%] bg-clip-text text-transparent"
        >
          Rutuj Dhawale
        </motion.h1>

        {/* Description — word-by-word stagger */}
        <motion.p
          className="text-neutral-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          variants={containerVariants}
        >
          <AnimatedWords text="Web & AI Developer turning real-world problems into scalable, production-ready solutions." />
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={wordVariants}
          className="flex items-center justify-center gap-4"
        >
          <Link
            to="work"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            className="px-6 py-2.5 bg-white text-neutral-950 text-sm font-medium rounded-full cursor-pointer hover:bg-neutral-200 transition-colors duration-200"
          >
            View Work
          </Link>
          <Link
            to="connect"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            className="px-6 py-2.5 bg-transparent text-white text-sm font-medium rounded-full border border-neutral-600 cursor-pointer hover:bg-neutral-800/50 hover:border-neutral-500 transition-all duration-200"
          >
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={600}
          className="cursor-pointer scroll-indicator block text-neutral-500 hover:text-neutral-300 transition-colors"
        >
          <ChevronDown size={24} />
        </Link>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent z-10" />
    </section>
  );
}
