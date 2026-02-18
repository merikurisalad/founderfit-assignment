# FounderFit Resource Library

**[Deliverables Document](https://docs.google.com/document/d/1__hpjKiPbiEytNrOnHT9O-1JqOzKdGQ3PJtNhqTlsAs/edit?usp=sharing)**

A curated resource library for first-time founders building direct-to-consumer sustainable fashion brands on a small budget. Built with React + Vite.

## Features

- **24 curated resources** — articles, guides, case studies, videos, podcasts, tools, and more
- **Filter** by resource type, difficulty level, learning style, and minimum quality rating
- **Sort** by rating, title, or time commitment
- **Airtable view** — embedded Airtable for collaborative editing alongside the card view
- **Mobile responsive** — works on desktop, tablet, and phone

## Prerequisites

- [Node.js](https://nodejs.org/) v20.19+ or v22.12+ (recommended)
- npm (comes with Node.js)

## Getting Started

1. **Clone the repository** (if you haven't already):

   ```bash
   git clone <repo-url>
   cd founderfit-assignment/resource-library
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open in your browser** — Vite will print the local URL (typically `http://localhost:5173`).

## Project Structure

```
resource-library/
├── index.html                        # Entry HTML
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                      # React entry point
    ├── App.jsx                       # Main app — tabs, filters, sorting
    ├── App.css                       # All styles (no external CSS libs)
    ├── index.css
    ├── data/
    │   └── resources.js              # All 24 resources as a JS module
    └── components/
        ├── FilterBar.jsx             # Filter controls (type, level, style, rating)
        └── ResourceCard.jsx          # Individual resource card
```

## Available Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start local dev server with hot reload       |
| `npm run build`   | Build for production (outputs to `dist/`)    |
| `npm run preview` | Preview the production build locally         |
| `npm run lint`    | Run ESLint                                   |

## Adding or Editing Resources

All resource data lives in `src/data/resources.js`. Each resource follows this shape:

```js
{
  id: 1,
  title: "Resource Title",
  type: "Article",              // Article, Guide, Case Study, Video, Podcast, Tool, etc.
  url: "https://...",
  source: "Source Name",
  learningStyle: "Reading",     // Reading, Visual, Audio, Hands-on
  timeCommitment: "15-30 min",
  qualityRating: 4,             // 1–5
  ratingReasoning: "...",
  keyTakeaway: "...",
  recommendedFor: "Beginner",   // Beginner, Beginner to Intermediate, Intermediate, Intermediate to Advanced
}
```

Add a new object to the `resources` array and it will appear automatically — filters and sorting will pick it up with no other changes needed.

## Tech Stack

- **React 19** — UI components
- **Vite 7** — Dev server and bundler
- **Vanilla CSS** — No external CSS frameworks; custom properties for easy theming
- **Plus Jakarta Sans** — Header font (loaded from Google Fonts)
