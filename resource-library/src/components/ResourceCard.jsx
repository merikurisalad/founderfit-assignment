const TYPE_COLORS = {
  Article: "#2563eb",
  Guide: "#7c3aed",
  "Case Study": "#059669",
  Video: "#dc2626",
  Podcast: "#d97706",
  "Podcast Episode": "#d97706",
  Tool: "#0891b2",
  "Industry Resource": "#4f46e5",
  Directory: "#0d9488",
  "Accelerator Program": "#c026d3",
  "Blog / Resource Hub": "#ea580c",
};

const STYLE_ICONS = {
  Reading: "\u{1F4D6}",
  Visual: "\u{1F3AC}",
  Audio: "\u{1F3A7}",
  "Hands-on": "\u{1F6E0}\uFE0F",
};

function Stars({ rating }) {
  return (
    <span className="stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? "star filled" : "star"}>
          &#9733;
        </span>
      ))}
    </span>
  );
}

function ResourceCard({ resource }) {
  const badgeColor = TYPE_COLORS[resource.type] || "#6b7280";
  const styleIcon = STYLE_ICONS[resource.learningStyle] || "";

  return (
    <article className="resource-card">
      <div className="card-header">
        <span className="type-badge" style={{ backgroundColor: badgeColor }}>
          {resource.type}
        </span>
        <Stars rating={resource.qualityRating} />
      </div>

      <h3 className="card-title">
        <a href={resource.url} target="_blank" rel="noopener noreferrer">
          {resource.title}
        </a>
      </h3>

      <div className="card-meta">
        <span className="meta-item">{resource.source}</span>
        <span className="meta-separator">·</span>
        <span className="meta-item">
          {styleIcon} {resource.learningStyle}
        </span>
        <span className="meta-separator">·</span>
        <span className="meta-item">{resource.timeCommitment}</span>
      </div>

      <p className="card-takeaway">{resource.keyTakeaway}</p>

      <div className="card-footer">
        <span className="level-badge">{resource.recommendedFor}</span>
        <a
          className="card-link"
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View resource &rarr;
        </a>
      </div>
    </article>
  );
}

export default ResourceCard;
