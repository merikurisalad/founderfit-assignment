import { useState, useMemo } from "react";
import { resources, metadata } from "./data/resources";
import FilterBar from "./components/FilterBar";
import ResourceCard from "./components/ResourceCard";
import "./App.css";

const AIRTABLE_URL =
  "https://airtable.com/embed/appJK66ipRqkTDG66/shrXHBPNgstNP4NMk";

const SORT_OPTIONS = [
  { value: "rating-desc", label: "Rating (high to low)" },
  { value: "rating-asc", label: "Rating (low to high)" },
  { value: "alpha-asc", label: "Title (A–Z)" },
  { value: "alpha-desc", label: "Title (Z–A)" },
  { value: "time-asc", label: "Time (shortest first)" },
  { value: "default", label: "Default order" },
];

const TIME_ORDER = [
  "Under 15 min",
  "Under 15 min per article",
  "15-30 min",
  "30-60 min",
  "30-60 min per episode",
  "1-2 hours setup",
  "10+ hours",
];

function sortResources(list, sortKey) {
  const sorted = [...list];
  switch (sortKey) {
    case "rating-desc":
      return sorted.sort((a, b) => b.qualityRating - a.qualityRating);
    case "rating-asc":
      return sorted.sort((a, b) => a.qualityRating - b.qualityRating);
    case "alpha-asc":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case "alpha-desc":
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    case "time-asc":
      return sorted.sort(
        (a, b) =>
          TIME_ORDER.indexOf(a.timeCommitment) -
          TIME_ORDER.indexOf(b.timeCommitment),
      );
    default:
      return sorted;
  }
}

function App() {
  const [activeTab, setActiveTab] = useState("library");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [filters, setFilters] = useState({
    type: "all",
    level: "all",
    style: "all",
    rating: "all",
  });

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    const result = resources.filter((r) => {
      if (q) {
        const haystack = `${r.title} ${r.source} ${r.type} ${r.keyTakeaway} ${r.recommendedFor}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      if (filters.type !== "all" && r.type !== filters.type) return false;
      if (filters.level !== "all" && r.recommendedFor !== filters.level)
        return false;
      if (filters.style !== "all" && r.learningStyle !== filters.style)
        return false;
      if (filters.rating !== "all" && r.qualityRating < Number(filters.rating))
        return false;
      return true;
    });
    return sortResources(result, sortBy);
  }, [filters, sortBy, search]);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>FounderFit Resource Library</h1>
          <p className="header-subtitle">{metadata.challenge}</p>
          <nav className="tab-nav">
            <button
              className={`tab-btn ${activeTab === "library" ? "active" : ""}`}
              onClick={() => setActiveTab("library")}
            >
              Card View
            </button>
            <button
              className={`tab-btn ${activeTab === "airtable" ? "active" : ""}`}
              onClick={() => setActiveTab("airtable")}
            >
              Airtable View
            </button>
          </nav>
        </div>
      </header>

      {activeTab === "library" ? (
        <main className="main-content">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search resources..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
          </div>
          <FilterBar
            filters={filters}
            setFilters={setFilters}
            resources={resources}
          />

          <div className="results-bar">
            <span className="results-info">
              Showing <strong>{filtered.length}</strong> of {resources.length}{" "}
              resources
            </span>
            <div className="sort-control">
              <label htmlFor="sort-select">Sort by</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="empty-state">
              <p>No resources match your filters.</p>
              <button
                onClick={() =>
                  setFilters({
                    type: "all",
                    level: "all",
                    style: "all",
                    rating: "all",
                  })
                }
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="resource-grid">
              {filtered.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          )}
        </main>
      ) : (
        <main className="main-content airtable-content">
          <div className="airtable-wrapper">
            <iframe
              className="airtable-embed"
              src={AIRTABLE_URL}
              frameBorder="0"
              width="100%"
              height="100%"
              title="Resource Library — Airtable"
              style={{ background: "transparent", border: "1px solid #ccc" }}
            />
          </div>
        </main>
      )}

      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-about">
            <h2 className="footer-brand">FounderFit</h2>
            <p className="footer-tagline">
              A resource hub for first-time founders in the sustainable fashion
              industry. We're here to help founders navigate the unique
              challenges of building eco-conscious fashion brands.
            </p>
          </div>
          <div className="footer-contact">
            <p className="footer-contact-label">Get in touch</p>
            <a href="mailto:contact@founderfit.com">contact@founderfit.com</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 FounderFit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
