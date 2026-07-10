# Wrong Fact

Wrong Fact is a static website that shows people outdated facts and classroom myths they may have learned based on the year they graduated from high school.

Visitors enter a graduation year, and the site estimates their K–12 window, ranks relevant corrections, and provides links to authoritative sources.

## Features

- Graduation-year personalization
- 28 researched facts across five subject areas
- Category filters, search, and sorting
- Expandable explanations and source links
- Shareable URLs such as `?year=2006`
- Responsive desktop and mobile layouts
- Keyboard-accessible controls and reduced-motion support
- Custom favicon and Apple Touch icon
- No backend, database, build step, or runtime dependencies

## Run locally

From the project directory, start any static file server. For example:

```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

Then open [http://localhost:4173](http://localhost:4173).

Opening `index.html` directly also works for most features, but a local server more closely matches production hosting.

## Project structure

```text
wrongfact/
├── assets/
│   ├── apple-touch-icon.png
│   ├── favicon-32.png
│   └── favicon.png
├── index.html
├── script.js
├── styles.css
└── README.md
```

- `index.html` contains the page structure and content sections.
- `styles.css` contains the full responsive design system.
- `script.js` contains the fact dataset and all interactive behavior.
- `assets/` contains raster favicon variants.

## Add or update a fact

Facts are stored in the `FACTS` array near the top of `script.js`. Each entry follows this general shape:

```js
{
  id: "unique-slug",
  category: "Life science",
  myth: "The outdated claim.",
  title: "The corrected takeaway.",
  answer: "A concise explanation of the correction.",
  detail: "Additional context, nuance, and limitations.",
  year: 2001,
  dateLabel: "2001", // Optional display label
  type: "Count revised",
  persistence: 0.8,
  source: "Source organization",
  sourceUrl: "https://example.org/source"
}
```

When editing the dataset:

1. Prefer primary sources, official scientific organizations, government agencies, and museums.
2. Avoid presenting a gradual scientific shift as though every textbook changed in one exact year.
3. Explain qualifications and unresolved questions in `detail`.
4. Keep `id` values unique and URL-safe.
5. Use one of the categories listed in `CATEGORIES`, or add the new category there too.
6. Update the visible fact and subject totals in `index.html` if their counts change.

The `persistence` value ranges from `0` to `1` and influences how strongly an older myth is treated as a likely classroom holdover. The `year` value anchors ranking and timeline calculations.

## Personalization model

The site estimates that a visitor began school 12 years before graduation. Facts rank higher when their major update occurred during or after that window. Persistent myths can continue to rank even when the underlying correction is older.

This is an informed estimate—not a claim about a specific teacher, school, curriculum, or country.

## Verification

Check JavaScript syntax with:

```bash
node --check script.js
```

For visual testing, check at minimum:

- A wide desktop viewport
- A mobile viewport around 390 pixels wide
- Graduation-year validation and submission
- Category filtering and search
- Empty search results and filter reset
- Expandable footnotes
- Shareable year URLs
- Source and favicon asset requests

## Deployment

Because the project is entirely static, it can be deployed without modification to:

- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel
- Amazon S3 or another static object host
- Any conventional web server

Configure the deployment root as this directory. There is no build command and the publish directory is `.`.

## Research note

The included research was checked in July 2026. Source links and scientific consensus can change, so facts should be periodically reviewed. A source link demonstrates support for a correction; it does not imply that every classroom taught the outdated version.

## License

No license has been selected yet. Add a `LICENSE` file before distributing or accepting external contributions.
