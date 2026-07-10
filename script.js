const FACTS = [
  {
    id: "pluto",
    category: "Earth & space",
    myth: "Pluto is the ninth planet.",
    title: "Pluto is a dwarf planet.",
    answer: "In 2006, the International Astronomical Union adopted a planet definition that Pluto does not meet because it has not cleared its orbital neighborhood.",
    detail: "Pluto did not disappear, and it was not demoted for being small. It became the prototype for a category of trans-Neptunian dwarf planets under the IAU definition.",
    year: 2006,
    dateLabel: "2006",
    type: "Reclassified",
    persistence: 0.9,
    source: "International Astronomical Union",
    sourceUrl: "https://www.iau.org/Iau/Iau/Science/What-we-do/FAQs.aspx"
  },
  {
    id: "feathered-dinosaurs",
    category: "Life science",
    myth: "Dinosaurs were giant, scaly lizards.",
    title: "Many dinosaurs wore feathers.",
    answer: "The 1996 discovery of Sinosauropteryx supplied the first clear evidence of a feathered non-avian dinosaur and transformed how many theropods are reconstructed.",
    detail: "Not every dinosaur was fluffy. Fossil skin shows scales on many species, while spectacular fossils from China show feather-like coverings across several meat-eating dinosaur groups.",
    year: 1996,
    type: "New evidence",
    persistence: 0.85,
    source: "Natural History Museum",
    sourceUrl: "https://www.nhm.ac.uk/discover/dino-directory/sinosauropteryx.html"
  },
  {
    id: "living-dinosaurs",
    category: "Life science",
    myth: "All dinosaurs died 66 million years ago.",
    title: "Birds are living dinosaurs.",
    answer: "The non-avian dinosaurs went extinct. Birds survived—and are now understood as one specialized branch of theropod dinosaurs.",
    detail: "Fossils, anatomy, and evolutionary analysis place birds inside Dinosauria. The sparrow outside your window is closer to a velociraptor than either is to a crocodile.",
    year: 1996,
    type: "Consensus shifted",
    persistence: 0.82,
    source: "Natural History Museum",
    sourceUrl: "https://www.nhm.ac.uk/discover/what-can-scientists-learn-about-dinosaurs-and-how.html"
  },
  {
    id: "neanderthals",
    category: "Life science",
    myth: "Neanderthals left no trace in us.",
    title: "Many people carry Neanderthal DNA.",
    answer: "The 2010 Neanderthal genome showed that early Homo sapiens and Neanderthals interbred. Many living people with ancestry outside Africa inherited a small percentage.",
    detail: "The original 2010 estimate was about 1–4% in sampled European and Asian genomes. Later research has refined those numbers and revealed an even more complicated human family tree.",
    year: 2010,
    type: "Genome decoded",
    persistence: 0.7,
    source: "Smithsonian Human Origins",
    sourceUrl: "https://humanorigins.si.edu/research/whats-hot-human-origins/neanderthal-genome"
  },
  {
    id: "human-genes",
    category: "Life science",
    myth: "Humans have about 100,000 genes.",
    title: "It’s closer to 20,000–25,000.",
    answer: "The first draft of the human genome in 2001 pushed estimates sharply downward. The final sequence lowered the estimate again to roughly a quarter of the old textbook number.",
    detail: "Biological complexity is not a simple gene-count contest. Alternative splicing, gene regulation, and interactions among proteins let a smaller set of genes do far more than expected.",
    year: 2001,
    type: "Count revised",
    persistence: 0.55,
    source: "National Human Genome Research Institute",
    sourceUrl: "https://www.genome.gov/25520483/online-education-kit-2001-first-draft-of-the-human-genome-sequence-released"
  },
  {
    id: "bacteria-ratio",
    category: "Body & health",
    myth: "Bacteria outnumber your cells 10 to 1.",
    title: "The ratio is roughly 1 to 1.",
    answer: "A 2016 reassessment estimated about 38 trillion bacterial cells and 30 trillion human cells in a reference adult—not the famous ten-to-one ratio.",
    detail: "Both totals vary by person and can change. The important correction is scale: your microbes are numerous, but they do not outnumber your own cells by an order of magnitude.",
    year: 2016,
    type: "Estimate revised",
    persistence: 0.8,
    source: "PLOS Biology via PubMed",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/27541692/"
  },
  {
    id: "ulcers",
    category: "Body & health",
    myth: "Stress and spicy food cause most ulcers.",
    title: "A bacterium causes most peptic ulcers.",
    answer: "Marshall and Warren’s 1982 discovery connected Helicobacter pylori to gastritis and ulcers. Eliminating the infection with antibiotics can cure many cases.",
    detail: "Stress and some foods can aggravate symptoms, and not every ulcer has the same cause. But H. pylori causes more than 90% of duodenal ulcers and up to 80% of gastric ulcers, according to the Nobel committee.",
    year: 1982,
    type: "Medical reversal",
    persistence: 0.88,
    source: "The Nobel Prize",
    sourceUrl: "https://www.nobelprize.org/prizes/medicine/2005/press-release/"
  },
  {
    id: "tongue-map",
    category: "Body & health",
    myth: "Each tongue zone detects one taste.",
    title: "Your whole tongue joins the tasting.",
    answer: "Sweet, salty, sour, bitter, and umami are not confined to neat tongue territories. Receptor cells for the basic tastes are distributed across the tongue and oral cavity.",
    detail: "Sensitivity can vary slightly by location, which helped the diagram survive. What is wrong is the hard boundary—the familiar classroom map with exclusive taste zones.",
    year: 2000,
    type: "Textbook myth",
    persistence: 0.95,
    source: "Current Research in Food Science via NIH",
    sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8956797/"
  },
  {
    id: "five-senses",
    category: "Body & health",
    myth: "Humans have exactly five senses.",
    title: "Five is a useful starter pack.",
    answer: "Beyond sight, hearing, smell, taste, and touch, your nervous system senses balance, body position, pain, temperature, internal states, and more.",
    detail: "There is no universally agreed single count because scientists group sensory systems in different ways. Proprioception—the awareness of where your body is in space—was named in 1906 and is often called a sixth sense.",
    year: 1906,
    dateLabel: "Named 1906",
    type: "Ancient shortcut",
    persistence: 1,
    source: "NIH Intramural Research Program",
    sourceUrl: "https://irp.nih.gov/scibites/the-bodys-sixth-sense"
  },
  {
    id: "appendix",
    category: "Body & health",
    myth: "The appendix is a useless leftover.",
    title: "The appendix has immune functions.",
    answer: "The appendix contains immune tissue involved in defense against microbes and appears to help regulate bacteria in the intestine—even though people can live without it.",
    detail: "Calling it dispensable is not the same as calling it functionless. Its full evolutionary story is still studied, but the organ is no longer treated as biological packing material.",
    year: 2004,
    dateLabel: "Evidence grew",
    type: "Function found",
    persistence: 0.86,
    source: "National Institutes of Health",
    sourceUrl: "https://www.nih.gov/news-events/nih-research-matters/appendix-linked-toxic-parkinsons-protein"
  },
  {
    id: "states-of-matter",
    category: "Physical science",
    myth: "Matter comes in only three states.",
    title: "Solid, liquid, and gas are just the familiar three.",
    answer: "Plasma is abundant across the universe, and in 1995 scientists created a Bose–Einstein condensate in dilute atomic gases—an extreme quantum state of matter.",
    detail: "There are other exotic phases too. Elementary classrooms teach three because they describe everyday conditions well, not because nature stops counting at gas.",
    year: 1995,
    type: "New state made",
    persistence: 0.9,
    source: "The Nobel Prize",
    sourceUrl: "https://www.nobelprize.org/nobel_prizes/physics/laureates/2001/popular.html"
  },
  {
    id: "seasons",
    category: "Earth & space",
    myth: "Summer happens when Earth is closer to the Sun.",
    title: "Earth’s tilt makes the seasons.",
    answer: "A hemisphere gets summer when it tilts toward the Sun and receives more direct rays and longer days. In fact, Earth is farthest from the Sun in July.",
    detail: "Distance has a small effect on incoming energy, but it does not drive the familiar annual seasons. Opposite seasons in the two hemispheres are the giveaway.",
    year: 1600,
    dateLabel: "Long known",
    type: "Persistent myth",
    persistence: 1,
    source: "NASA Space Place",
    sourceUrl: "https://spaceplace.nasa.gov/seasons/en/"
  },
  {
    id: "great-wall",
    category: "Earth & space",
    myth: "The Great Wall is visible from the Moon.",
    title: "Not without serious help.",
    answer: "NASA says the wall is not visible from the Moon and is difficult or impossible to identify from Earth orbit without high-powered lenses and ideal conditions.",
    detail: "The wall is long but narrow and built from materials that blend into its surroundings. City lights, roads, reservoirs, and other human effects can be much easier to spot from orbit.",
    year: 2005,
    type: "Space myth",
    persistence: 0.96,
    source: "NASA",
    sourceUrl: "https://www.nasa.gov/image-article/great-wall/"
  },
  {
    id: "lightning",
    category: "Earth & space",
    myth: "Lightning never strikes the same place twice.",
    title: "Lightning is a repeat customer.",
    answer: "Tall, pointed, isolated objects are struck repeatedly. The National Weather Service says the Empire State Building averages 23 strikes a year.",
    detail: "A previous strike does not make a location safer. If thunder is audible, seek a substantial building or hard-topped vehicle; there is no safe place outdoors in a thunderstorm.",
    year: 1752,
    dateLabel: "Long known",
    type: "Dangerous myth",
    persistence: 1,
    source: "National Weather Service",
    sourceUrl: "https://www.weather.gov/safety/lightning-myths"
  },
  {
    id: "tallest-mountain",
    category: "Earth & space",
    myth: "Everest is simply Earth’s tallest mountain.",
    title: "It depends where you start measuring.",
    answer: "Everest is highest above sea level. Mauna Kea is tallest from base to peak, while Chimborazo’s summit is farthest from Earth’s center.",
    detail: "None of the three descriptions cancels the others. The correction is that a superlative needs a definition: elevation, total relief, or distance from the planet’s center.",
    year: 1956,
    dateLabel: "Depends on definition",
    type: "Definition matters",
    persistence: 0.9,
    source: "NOAA National Ocean Service",
    sourceUrl: "https://oceanservice.noaa.gov/facts/highestpoint.html"
  },
  {
    id: "thanksgiving",
    category: "History",
    myth: "The first Thanksgiving was a simple friendship feast.",
    title: "The school-pageant version leaves out the power struggle.",
    answer: "The 1621 harvest gathering happened, but the tidy national origin story was built centuries later and often erases Wampanoag perspectives and the violence of colonization.",
    detail: "Wampanoag people had lived in the region for at least 12,000 years. The alliance with Plymouth was strategic, existed amid unequal power, and ended in devastating war. Native people are still here.",
    year: 1970,
    type: "Story widened",
    persistence: 1,
    source: "Smithsonian National Museum of the American Indian",
    sourceUrl: "https://americanindian.si.edu/nk360/thanksgiving/"
  },
  {
    id: "washington-teeth",
    category: "History",
    myth: "George Washington had wooden teeth.",
    title: "His dentures were stranger—and more troubling.",
    answer: "Washington’s dentures used ivory, metals, and human and animal teeth. Wood was never a standard material; staining and hairline fractures may have created the appearance.",
    detail: "The surviving dentures include human teeth, though their exact donors are unknown. Records also show Washington’s dentist obtained teeth from enslaved people at Mount Vernon.",
    year: 1950,
    dateLabel: "Never true",
    type: "Schoolhouse legend",
    persistence: 0.96,
    source: "George Washington’s Mount Vernon",
    sourceUrl: "https://www.mountvernon.org/library/digitalhistory/digital-encyclopedia/article/wooden-teeth-myth"
  },
  {
    id: "food-pyramid",
    category: "Body & health",
    myth: "The Food Pyramid is the blueprint for a healthy diet.",
    title: "The pyramid was guidance, and the guidance changed.",
    answer: "USDA replaced the 1992 Food Guide Pyramid with MyPyramid in 2005 and then MyPlate in 2011, shifting from fixed serving tiers to food-group proportions and personalization.",
    detail: "Nutrition advice keeps evolving with evidence and policy. The familiar pyramid was never a law of biology, and modern federal guidance emphasizes dietary patterns rather than one universal stack of foods.",
    year: 2011,
    type: "Guidance replaced",
    persistence: 0.77,
    source: "U.S. Department of Agriculture",
    sourceUrl: "https://www.ers.usda.gov/topics/food-choices-health/food-consumption-demand/flexible-consumer-behavior-survey"
  }
];

const CATEGORIES = ["All", "Life science", "Body & health", "Physical science", "Earth & space", "History"];
const state = { year: 2006, category: "All", query: "", sort: "match" };

const els = {
  form: document.querySelector("#yearForm"),
  input: document.querySelector("#gradYear"),
  error: document.querySelector("#yearError"),
  headerYear: document.querySelector("#headerYear"),
  titleYear: document.querySelector("#resultsTitle span"),
  summary: document.querySelector("#resultsSummary"),
  schoolWindow: document.querySelector("#schoolWindow"),
  afterCount: document.querySelector("#afterCount"),
  topCategory: document.querySelector("#topCategory"),
  filters: document.querySelector("#categoryFilters"),
  search: document.querySelector("#factSearch"),
  sort: document.querySelector("#sortFacts"),
  grid: document.querySelector("#factGrid"),
  visibleCount: document.querySelector("#visibleCount"),
  empty: document.querySelector("#emptyState"),
  clear: document.querySelector("#clearFilters"),
  share: document.querySelector("#shareButton")
};

function clampYear(raw) {
  const year = Number.parseInt(raw, 10);
  return Number.isFinite(year) && year >= 1940 && year <= 2026 ? year : null;
}

function matchScore(fact, gradYear) {
  const schoolStart = gradYear - 12;
  if (fact.year >= schoolStart && fact.year <= gradYear) return 100 - Math.abs(gradYear - fact.year) * 0.35;
  if (fact.year > gradYear) return Math.max(62, 96 - (fact.year - gradYear) * 1.6);
  const agePenalty = Math.min(42, (schoolStart - fact.year) * 0.12);
  return 52 + fact.persistence * 38 - agePenalty;
}

function eraLabel(fact, gradYear) {
  const schoolStart = gradYear - 12;
  if (fact.year > gradYear) return `Updated ${fact.year - gradYear} yr${fact.year - gradYear === 1 ? "" : "s"} after you left`;
  if (fact.year >= schoolStart) return "Changed while you were in school";
  if (fact.persistence >= 0.9) return "A stubborn classroom holdover";
  return "Likely still in older textbooks";
}

function timelineWidth(fact, gradYear) {
  const min = Math.min(gradYear - 12, fact.year) - 2;
  const max = Math.max(gradYear, fact.year) + 2;
  return Math.max(5, Math.min(100, ((fact.year - min) / (max - min)) * 100));
}

function renderFilters() {
  els.filters.innerHTML = CATEGORIES.map(category => {
    const count = category === "All" ? FACTS.length : FACTS.filter(fact => fact.category === category).length;
    const active = category === state.category;
    return `<button class="filter-button${active ? " active" : ""}" type="button" data-category="${category}" aria-pressed="${active}">${category}<span>${count}</span></button>`;
  }).join("");
}

function getVisibleFacts() {
  const query = state.query.trim().toLowerCase();
  const visible = FACTS.filter(fact => {
    const inCategory = state.category === "All" || fact.category === state.category;
    const haystack = `${fact.myth} ${fact.title} ${fact.answer} ${fact.category}`.toLowerCase();
    return inCategory && (!query || haystack.includes(query));
  });
  return visible.sort((a, b) => {
    if (state.sort === "newest") return b.year - a.year;
    if (state.sort === "oldest") return a.year - b.year;
    return matchScore(b, state.year) - matchScore(a, state.year);
  });
}

function renderCard(fact, index) {
  const label = eraLabel(fact, state.year);
  const width = timelineWidth(fact, state.year);
  const dateLabel = fact.dateLabel || fact.year;
  return `
    <article class="fact-card" id="fact-${fact.id}">
      <div class="card-top">
        <div class="card-number">${String(index + 1).padStart(2, "0")}</div>
        <div class="card-meta"><span>${fact.category}</span><span class="era-badge">${label}</span></div>
      </div>
      <div class="card-body">
        <p class="old-claim">You may have learned: <span>${fact.myth}</span></p>
        <h3>${fact.title}</h3>
        <p class="answer">${fact.answer}</p>
        <div class="timeline" aria-label="Update timeline: school years ${state.year - 12} to ${state.year}; correction note ${dateLabel}">
          <div class="timeline-labels"><span>${state.year - 12} · school starts</span><span>${dateLabel}</span></div>
          <div class="timeline-track"><span style="width:${width}%"></span></div>
        </div>
      </div>
      <details class="card-details">
        <summary>Open the footnotes</summary>
        <div class="detail-inner">
          <p>${fact.detail}</p>
          <a class="source-link" href="${fact.sourceUrl}" target="_blank" rel="noreferrer">Source: ${fact.source} <span aria-hidden="true">↗</span></a>
        </div>
      </details>
    </article>`;
}

function updateSummary() {
  const updatesAfter = FACTS.filter(fact => fact.year > state.year).length;
  const ranked = [...FACTS].sort((a, b) => matchScore(b, state.year) - matchScore(a, state.year));
  const categoryScores = ranked.slice(0, 8).reduce((scores, fact) => {
    scores[fact.category] = (scores[fact.category] || 0) + matchScore(fact, state.year);
    return scores;
  }, {});
  const topCategory = Object.entries(categoryScores).sort((a, b) => b[1] - a[1])[0][0];
  els.headerYear.querySelector("span").textContent = state.year;
  els.titleYear.textContent = state.year;
  els.schoolWindow.textContent = `${state.year - 12}—${state.year}`;
  els.afterCount.textContent = updatesAfter;
  els.topCategory.textContent = topCategory;
  els.summary.textContent = updatesAfter
    ? `${updatesAfter} of these updates landed after you graduated. Others are older myths that had a habit of surviving well past their expiration date.`
    : "All of these updates predate your graduation—but several classroom myths are famous for outliving the evidence against them.";
}

function renderFacts() {
  const facts = getVisibleFacts();
  els.grid.innerHTML = facts.map(renderCard).join("");
  els.visibleCount.textContent = facts.length;
  els.empty.hidden = facts.length > 0;
}

function renderAll() {
  renderFilters();
  updateSummary();
  renderFacts();
}

function setYear(year, shouldScroll = false) {
  state.year = year;
  els.input.value = year;
  els.error.textContent = "";
  const url = new URL(window.location.href);
  url.searchParams.set("year", year);
  history.replaceState(null, "", url);
  localStorage.setItem("wrongfact-year", year);
  renderAll();
  if (shouldScroll) document.querySelector("#results").scrollIntoView({ behavior: "smooth", block: "start" });
}

els.form.addEventListener("submit", event => {
  event.preventDefault();
  const year = clampYear(els.input.value);
  if (!year) {
    els.error.textContent = "Enter a year from 1940 through 2026.";
    els.input.focus();
    return;
  }
  setYear(year, true);
});

els.headerYear.addEventListener("click", () => {
  document.querySelector("#yearPanel").scrollIntoView({ behavior: "smooth", block: "center" });
  window.setTimeout(() => els.input.select(), 450);
});

els.filters.addEventListener("click", event => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  renderFilters();
  renderFacts();
});

els.search.addEventListener("input", event => {
  state.query = event.target.value;
  renderFacts();
});

els.sort.addEventListener("change", event => {
  state.sort = event.target.value;
  renderFacts();
});

els.clear.addEventListener("click", () => {
  state.category = "All";
  state.query = "";
  els.search.value = "";
  renderFilters();
  renderFacts();
});

els.share.addEventListener("click", async () => {
  const label = els.share.querySelector("span");
  try {
    await navigator.clipboard.writeText(window.location.href);
    label.textContent = "Link copied";
  } catch {
    label.textContent = "Copy the URL above";
  }
  window.setTimeout(() => { label.textContent = "Copy your results link"; }, 2200);
});

const params = new URLSearchParams(window.location.search);
const initialYear = clampYear(params.get("year")) || clampYear(localStorage.getItem("wrongfact-year")) || 2006;
state.year = initialYear;
els.input.value = initialYear;
renderAll();
