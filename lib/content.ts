export const profile = {
  name: "Kelvin Ajayi",
  role: "Software engineer",
  location: "Nigeria",
  workMode: "Remote",
  email: "kelvide7@gmail.com",
  phone: "+234 814 131 6786",
  summary:
    "I build production web, mobile, and AI products, and I own them from the API through to the client. Five years of that, for teams in the US, Australia, India, and Nigeria.",
  aim: "I am in week 7 of an 8-week LLM engineering course. The long aim is forward deployed engineering: join a customer's system and make a model useful there.",
  links: {
    email: "mailto:kelvide7@gmail.com",
    phone: "tel:+2348141316786",
    linkedin: "https://www.linkedin.com/in/kelvin-ajayi/",
    github: "https://github.com/scryptwiz",
    x: "https://x.com/KelvinAjayi8",
    resume: "/kelvin-ajayi-resume.pdf",
  },
};

export const hiring = [
  {
    label: "Now",
    value: "Full-time mobile and fullstack, and an AI engineering internship",
  },
  {
    label: "Based",
    value: "Nigeria, working remote",
  },
  {
    label: "Studying",
    value: "LLM engineering, week 7 of 8",
    href: "#direction",
  },
];

export type WorkItem = {
  index: string;
  name: string;
  when: string;
  role: string;
  context: string;
  bullets: string[];
  stack: string[];
  links?: { label: string; href: string }[];
};

export const work: WorkItem[] = [
  {
    index: "01",
    name: "Omenai",
    when: "Nov 2025 — Sep 2026",
    role: "Software engineer",
    context: "Art marketplace. APIs, web, and mobile. Remote, United States.",
    bullets: [
      "Owned artwork editing across the API, web, and mobile, including role-based pricing for artists and galleries. About 30–50 artists and a partner gallery use it.",
      "Fixed a production bug in the third-party shipping rate API in 30 minutes and unblocked a stalled $5K order.",
      "Rebuilt the media-heavy feed so it holds a stable 60 FPS, up from about 24–30, with faster loads.",
      "Set up QA across web and mobile, including pre-deployment API tests, plus API and app security checks.",
      "Automated iOS and Android releases with GitHub Actions and EAS, and built an AR viewer plus a museum-style gallery with true aspect ratios.",
    ],
    stack: ["React Native", "Expo", "REST APIs", "GitHub Actions", "EAS"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/app/6748387089" },
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.omenai.omenaiapp" },
      { label: "Product", href: "https://omenai.app/" },
    ],
  },
  {
    index: "02",
    name: "Convose",
    when: "Mar 2025 — Jan 2026",
    role: "Lead mobile engineer",
    context: "Social video and chat. Remote, Australia.",
    bullets: [
      "Led a 3-engineer mobile team through the move from React Native 0.72 to 0.81 on the current Expo SDK.",
      "Cut the app from 130MB+ to 63MB and improved startup by dropping legacy libraries, replacing AsyncStorage with MMKV, and Redux/RxJS with Zustand.",
      "Built video, voice, and chat on Agora, WebSockets, and WebRTC.",
      "Rebuilt chat lists with FlashList so thousands of messages stay at 60 FPS, and moved releases to GitHub Actions and EAS.",
    ],
    stack: ["React Native", "Expo", "Zustand", "MMKV", "FlashList", "Agora", "WebRTC"],
    links: [{ label: "App Store", href: "https://apps.apple.com/us/app/convose/id1211836516" }],
  },
  {
    index: "03",
    name: "Provolo",
    when: "Aug 2025 — Aug 2026",
    role: "Co-founder and founding engineer",
    context: "AI profiles, proposals, and resumes.",
    bullets: [
      "Co-founder and founding engineer. Led a 3-engineer team, with design, security, and marketing alongside. The product reached 6,500+ active users.",
      "Designed the retrieval layer: embeddings of a curated proposal and profile corpus, so the model writes from real examples.",
      "Owned the React frontend and most of the backend, including Polar payments, verified webhooks, device-bound sessions, and DNS-level email protections.",
    ],
    stack: ["React", "RAG", "Vector search", "Polar", "Go"],
    links: [{ label: "Product", href: "https://www.provolo.org/" }],
  },
  {
    index: "04",
    name: "Lexicon",
    when: "Feb 2025 — Jun 2025",
    role: "Next.js developer, WebbyWolf",
    context: "An AI article generator. Remote, India.",
    bullets: [
      "Built 95% of thelexicon.ai on Next.js, Supabase, the OpenAI API, and Tailwind CSS.",
      "Shipped subscription access with Dodo Payments and the interface motion with Framer Motion.",
    ],
    stack: ["Next.js", "Supabase", "OpenAI", "Tailwind CSS", "Dodo Payments"],
  },
  {
    index: "05",
    name: "Bellfast",
    when: "Jul 2024 — Dec 2024",
    role: "Backend, subcontract via Digit",
    context: "Fintech and marketplace platform.",
    bullets: [
      "Built the production backend, then moved it off an over-provisioned VPS onto lighter infrastructure.",
      "Added Redis for hot data and tightened the hot paths. Resource use fell 52%. Operating cost fell 90%.",
    ],
    stack: ["Node.js", "Redis", "REST APIs"],
    links: [{ label: "Site", href: "https://www.bellfastng.com/" }],
  },
];

export const experience = [
  {
    when: "Nov 2025 — Sep 2026",
    title: "Software engineer",
    company: "Omenai",
    summary: "Art marketplace across API, web, and mobile. Remote, United States. Shipping rates, feed performance, AR gallery.",
  },
  {
    when: "Aug 2025 — Aug 2026",
    title: "Co-founder and founding engineer",
    company: "Provolo",
    summary: "AI career platform. Retrieval over real proposals. 6,500+ active users.",
  },
  {
    when: "Mar 2025 — Jan 2026",
    title: "Lead mobile engineer",
    company: "Convose",
    summary: "Expo migration. App size 130MB+ to 63MB. Video, voice, and chat.",
  },
  {
    when: "Feb 2025 — Jun 2025",
    title: "Next.js developer",
    company: "WebbyWolf",
    summary: "Fullstack build of thelexicon.ai, an AI article generator.",
  },
  {
    when: "Jan 2023 — Feb 2025",
    title: "Software engineer",
    company: "Digit Information & Software Technologies",
    summary:
      "Hospital management system, a commerce frontend, the Bellfast backend, and Konnect’s move to React Native.",
  },
  {
    when: "Jun 2022 — Dec 2022",
    title: "Frontend engineer",
    company: "ECLA Ecosystem",
    summary: "Web3 super-app and the Cyber Queens NFT marketplace.",
  },
  {
    when: "Oct 2021 — Feb 2022",
    title: "Frontend engineer",
    company: "SQI College of ICT",
    summary: "Tutored 300+ students in HTML, CSS, and JavaScript.",
  },
  {
    when: "Aug 2018 — Sep 2021",
    title: "UI/UX and brand designer",
    company: "Freelance",
    summary: "Branding and interface work that still shapes how I build product.",
  },
];

export const education = {
  when: "Sep 2021 — Jun 2026",
  title: "Bachelor of Technology, Computer Science",
  school: "Ladoke Akintola University of Technology",
  place: "Oyo, Nigeria",
  focus: "AI systems, embedded systems, robotics, databases, mobile, blockchain",
};

export type Project = {
  name: string;
  meta: string;
  detail: string;
  href?: string;
  links?: { label: string; href: string }[];
};

export const studies: Project[] = [
  {
    name: "Vantage",
    meta: "Live",
    detail:
      "Prediction-market intelligence. Reads historical data and current news to judge whether a trade is worth entering.",
    href: "https://intelligent-prediction-market.vercel.app/",
    links: [
      { label: "Live", href: "https://intelligent-prediction-market.vercel.app/" },
      { label: "GitHub", href: "https://github.com/scryptwiz/intelligent-prediction-market" },
    ],
  },
  {
    name: "Edger",
    meta: "2026",
    detail:
      "A pre-trade tool that calculates lot size and other risk numbers before a position is opened. Next.js, Supabase, Clerk.",
    href: "https://edgelog-ten.vercel.app/",
    links: [
      { label: "Live", href: "https://edgelog-ten.vercel.app/" },
      { label: "GitHub", href: "https://github.com/danielafriheart/Edger" },
    ],
  },
  {
    name: "Doc text editor",
    meta: "2025",
    detail:
      "A realtime collaborative editor with rich text and organization-based sharing. Next.js, Convex, Tiptap, Clerk.",
    href: "https://google-doks.vercel.app/",
    links: [
      { label: "Live", href: "https://google-doks.vercel.app/" },
      { label: "GitHub", href: "https://github.com/scryptwiz/Google-Docs" },
    ],
  },
  {
    name: "Subora",
    meta: "2026",
    detail:
      "iOS and Android subscription tracker with spend totals and push renewal reminders. Expo, Supabase, Clerk.",
    href: "https://x.com/KelvinAjayi8/status/2077333561699414516?s=20",
    links: [
      {
        label: "Preview",
        href: "https://x.com/KelvinAjayi8/status/2077333561699414516?s=20",
      },
      { label: "GitHub", href: "https://github.com/scryptwiz/Subora" },
    ],
  },
  {
    name: "Trendbit",
    meta: "2026",
    detail:
      "A news system that collects, deduplicates, and organizes trending stories from multiple sources.",
    href: "https://github.com/scryptwiz/trendbit",
    links: [{ label: "GitHub", href: "https://github.com/scryptwiz/trendbit" }],
  },
  {
    name: "App Doctor",
    meta: "SDK",
    detail:
      "A React Native performance SDK: screen timing, network latency, and a pluggable event pipeline.",
    href: "https://github.com/scryptwiz/appdoctor-rn",
    links: [{ label: "GitHub", href: "https://github.com/scryptwiz/appdoctor-rn" }],
  },
  {
    name: "Snowflake IDs",
    meta: "Backend",
    detail:
      "A Snowflake-style ID generator for distributed systems, with a custom epoch and machine id.",
    href: "https://github.com/scryptwiz/snowflake-id-generator",
    links: [{ label: "GitHub", href: "https://github.com/scryptwiz/snowflake-id-generator" }],
  },
  {
    name: "Kryptex",
    meta: "Security",
    detail:
      "A zero-knowledge manager for passwords and recovery keys, encrypted end to end.",
    href: "https://github.com/scryptwiz/Kryptex",
    links: [{ label: "GitHub", href: "https://github.com/scryptwiz/Kryptex" }],
  },
];

export const stack = [
  {
    label: "Languages",
    items: ["TypeScript", "Python", "Go", "Rust", "SQL"],
  },
  {
    label: "Mobile",
    items: ["React Native", "Expo", "Zustand", "FlashList", "MMKV"],
  },
  {
    label: "Web",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend",
    items: ["Node.js", "FastAPI", "REST", "WebSockets", "Supabase", "Convex"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "Redis", "pgvector"],
  },
  {
    label: "AI",
    items: ["OpenAI", "LangChain", "RAG", "Embeddings", "QLoRA"],
  },
  {
    label: "Delivery",
    items: ["GitHub Actions", "EAS", "Docker", "AWS", "GCP"],
  },
];

export const credentials = [
  {
    name: "LLM Engineering",
    source: "Edward Donner",
    status: "In progress",
    detail:
      "Week 7 of an 8-week course on building with large language models. The notes and exercises live in a public repo.",
    href: "https://github.com/scryptwiz/llm_engineering",
    progress: 7,
    total: 8,
  },
];
