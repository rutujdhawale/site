export default function TechBadge({ name, icon }) {
  return (
    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-700/60 bg-neutral-900/50 text-sm text-neutral-300 hover:border-neutral-500/60 hover:bg-neutral-800/50 transition-all duration-300 cursor-default select-none">
      <span className="text-xs">{icon}</span>
      <span>{name}</span>
    </span>
  );
}
