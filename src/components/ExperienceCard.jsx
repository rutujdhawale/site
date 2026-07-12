export default function ExperienceCard({ role, company, location, dateRange, bullets }) {
  /**
   * Highlights specific keywords in a text string by wrapping them
   * in bold/colored spans.
   */
  const renderHighlightedText = (text, highlights = []) => {
    if (!highlights.length) return text;

    let result = text;
    const parts = [];
    let lastIndex = 0;

    // Sort highlights by their position in text (earliest first)
    const sortedHighlights = highlights
      .map((h) => ({ text: h, index: result.indexOf(h) }))
      .filter((h) => h.index !== -1)
      .sort((a, b) => a.index - b.index);

    sortedHighlights.forEach(({ text: highlight, index }) => {
      if (index >= lastIndex) {
        // Add the text before the highlight
        if (index > lastIndex) {
          parts.push(
            <span key={`text-${lastIndex}`}>
              {result.slice(lastIndex, index)}
            </span>
          );
        }
        // Add the highlighted text
        parts.push(
          <span key={`hl-${index}`} className="text-white font-medium">
            {highlight}
          </span>
        );
        lastIndex = index + highlight.length;
      }
    });

    // Add remaining text
    if (lastIndex < result.length) {
      parts.push(
        <span key={`text-end`}>{result.slice(lastIndex)}</span>
      );
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <div className="py-8">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
        <div>
          <h3 className="text-lg font-semibold text-white">{role}</h3>
          <p className="text-sm text-neutral-400">
            <span className="text-amber-400/80">{company}</span>
            {" / "}
            <span className="text-neutral-500">{location}</span>
          </p>
        </div>
        <span className="text-sm text-neutral-500 whitespace-nowrap sm:text-right">
          {dateRange}
        </span>
      </div>

      <ul className="space-y-2.5 mt-4">
        {bullets.map((bullet, idx) => (
          <li
            key={idx}
            className="flex gap-2.5 text-[15px] text-neutral-400 leading-relaxed"
          >
            <span className="text-neutral-600 mt-1.5 shrink-0">•</span>
            <span>{renderHighlightedText(bullet.text, bullet.highlights)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
