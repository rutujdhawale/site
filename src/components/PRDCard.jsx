import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function PRDCard({
  title,
  product,
  type,
  preview,
  previewImage,
  documentUrl,
}) {
  const typeColors = {
    PRD: "text-blue-400 border-blue-400/30 bg-blue-400/10",
    Teardown: "text-amber-400 border-amber-400/30 bg-amber-400/10",
  };

  return (
    <motion.a
      href={documentUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className="group block prd-card rounded-xl border border-neutral-800/60 bg-neutral-900/30 p-5 sm:p-6 transition-all duration-300 hover:border-neutral-600/80"
    >
      <div className="flex flex-col sm:flex-row gap-5">
        {/* Preview image */}
        {previewImage && (
          <div className="shrink-0 w-full sm:w-40 h-28 sm:h-24 rounded-lg overflow-hidden border border-neutral-800/60 bg-neutral-900">
            <img
              src={previewImage}
              alt={`${title} preview`}
              className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header row */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="min-w-0">
              <div className="flex items-center gap-2.5 mb-1">
                <h3 className="text-base font-semibold text-white group-hover:text-neutral-100 transition-colors">
                  {title}
                  <ArrowUpRight size={15} className="inline-block ml-1 -mt-0.5 text-neutral-600 group-hover:text-neutral-400 transition-colors" />
                </h3>
              </div>
              <p className="text-sm text-neutral-500">{product}</p>
            </div>
            <span
              className={`shrink-0 text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${
                typeColors[type] || "text-neutral-400 border-neutral-700 bg-neutral-800/50"
              }`}
            >
              {type}
            </span>
          </div>

          {/* Preview text */}
          <p className="text-[14px] text-neutral-400 leading-relaxed line-clamp-2 mt-2">
            {preview}
          </p>

          {/* Read more */}
          <span className="inline-flex items-center gap-1 text-xs text-neutral-500 group-hover:text-neutral-300 mt-3 transition-colors duration-300">
            Read More
            <motion.span
              className="inline-block"
              animate={{ x: [0, 3, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              →
            </motion.span>
          </span>
        </div>
      </div>
    </motion.a>
  );
}
