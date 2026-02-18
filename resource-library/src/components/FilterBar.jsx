function FilterBar({ filters, setFilters, resources }) {
  const types = [...new Set(resources.map((r) => r.type))].sort();
  const levels = [
    "Beginner",
    "Beginner to Intermediate",
    "Intermediate",
    "Intermediate to Advanced",
  ];
  const styles = [...new Set(resources.map((r) => r.learningStyle))].sort();
  const ratings = [5, 4, 3];

  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const activeCount = Object.values(filters).filter((v) => v !== "all").length;

  const clearAll = () => {
    setFilters({ type: "all", level: "all", style: "all", rating: "all" });
  };

  return (
    <div className="filter-bar">
      <div className="filter-bar-header">
        <span className="filter-label">Filter resources</span>
        {activeCount > 0 && (
          <button className="clear-filters" onClick={clearAll}>
            Clear all ({activeCount})
          </button>
        )}
      </div>
      <div className="filter-controls">
        <div className="filter-group">
          <label htmlFor="filter-type">Type</label>
          <select
            id="filter-type"
            value={filters.type}
            onChange={(e) => handleChange("type", e.target.value)}
          >
            <option value="all">All types</option>
            {types.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="filter-level">Difficulty</label>
          <select
            id="filter-level"
            value={filters.level}
            onChange={(e) => handleChange("level", e.target.value)}
          >
            <option value="all">All levels</option>
            {levels.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="filter-style">Learning Style</label>
          <select
            id="filter-style"
            value={filters.style}
            onChange={(e) => handleChange("style", e.target.value)}
          >
            <option value="all">All styles</option>
            {styles.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="filter-rating">Min Rating</label>
          <select
            id="filter-rating"
            value={filters.rating}
            onChange={(e) => handleChange("rating", e.target.value)}
          >
            <option value="all">Any rating</option>
            {ratings.map((r) => (
              <option key={r} value={String(r)}>
                {r}+ stars
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
