// Single source of truth for all site copy. Pulled verbatim from content.md,
// with target cities removed and figures made exact/interview-defensible.

export const identity = {
  name: "Aadrika Deokathe",
  first: "Aadrika",
  last: "Deokathe",
  role: "Product & Technology · Builder · Computer Engineering",
  based: "Based in Indore, India · Open to opportunities",
  email: "aadrika.deokathe474@nmims.in",
  phone: "+91 9340991081",
  github: "https://github.com/aadrikadeokathe",
  linkedin: "https://linkedin.com/in/aadrikadeokathe",
  instagram: "", // add handle URL to light up the social button
};

export const hero = {
  lines: ["I build things.", "I analyze what's broken.", "I make a case for fixing it."],
  triad: ["Product", "Technology", "Strategy"],
};

export const about = {
  lead: "Final-year Computer Engineering student who'd rather build the fix than file the complaint.",
  paragraphs: [
    "I'm a final-year Computer Engineering student at NMIMS Indore — but what I actually spend my time doing is building Hive, a creator economy platform I co-founded, analyzing products I think are broken, and trying to get better at the intersection of technology and business strategy.",
    "I've interned as a Product Manager at Start Tech Academy, run experiential marketing campaigns for Red Bull India, and done strategy and AI automation work at MU20 School of Opportunity. I'm not chasing a generic software career — I want to build products that matter, work with people who are ambitious, and eventually do an MBA at Wharton or Columbia.",
  ],
  currently: [
    { icon: "🎓", text: "Final-year Computer Engineering" },
    { icon: "🚀", text: "Building Hive" },
    { icon: "🧠", text: "Learning Product" },
    { icon: "💼", text: "Looking for PM / BA / APM roles" },
    { icon: "📍", text: "Indore, India" },
  ],
};

export type Project = {
  id: string;
  chapter: string;
  chapterLabel: string;
  name: string;
  tagline: string;
  status: string;
  image: string;
  stats?: { value: string; label: string }[];
  description: string;
  stack: string[];
  links?: { label: string; href: string; primary?: boolean }[];
  arch?: string[];
};

export const hive: Project = {
  id: "hive",
  chapter: "01",
  chapterLabel: "What I build",
  name: "Hive",
  tagline: "Building the infrastructure layer for India's creator economy.",
  status: "Live · Phase 1 · Building in public",
  image: "/images/hive_mockup.png",
  description:
    "A two-sided creator marketplace (Hive) paired with a short-form content agency (Hive Creates). I own product strategy, positioning, GTM, and on-camera brand presence; co-founder Ram handles design and editing. Mutual-match model, project workspace, 10% platform commission, mobile-first PWA — currently seeding Indore-first and growing the creator and brand network.",
  stack: ["Product Strategy", "GTM", "Two-sided marketplace", "PWA", "Positioning"],
  stats: [
    { value: "2-sided", label: "Creator ↔ Brand marketplace" },
    { value: "10%", label: "Platform commission" },
    { value: "PWA", label: "Mobile-first, phase 1 live" },
  ],
};

export const zepto: Project = {
  id: "zepto",
  chapter: "02",
  chapterLabel: "What I analyze",
  name: "Zepto Review Intelligence",
  tagline:
    "Found a competitive sentiment gap 2.6× worse than rivals — then built the business case for fixing it.",
  status: "Live · Case study",
  image: "/images/zepto_mockup.png",
  description:
    "End-to-end review intelligence pipeline across 8,000+ Play Store reviews (Zepto, Blinkit, Instamart). Scraped, analyzed, and clustered complaints into 5 themes, built an interactive RICE prioritization simulator, validated with Cohen's Kappa, and modeled revenue at risk using real public data — delivered as a live dashboard and a one-page executive strategy memo.",
  stack: ["Python", "SQL", "VADER NLP", "TF-IDF / KMeans", "Streamlit", "Gemini API"],
  stats: [
    { value: "29.7%", label: "Negative sentiment (vs ~11.5% rivals)" },
    { value: "8,000+", label: "Reviews analyzed" },
    { value: "₹82–394 Cr", label: "Revenue at risk (modeled)" },
  ],
  links: [
    {
      label: "Live dashboard",
      href: "https://zepto-review-intelligence-ghywgev87orc5kcvqkuywu.streamlit.app/",
      primary: true,
    },
    { label: "Source", href: "https://github.com/aadrikadeokathe/zepto-review-intelligence" },
  ],
};

export const pitchos: Project = {
  id: "pitchos",
  chapter: "03",
  chapterLabel: "What I ship",
  name: "PitchOS",
  tagline: "Upload your pitch. Get a real investor Q&A. Walk out sharper.",
  status: "In development · 2026",
  image: "/images/pitchos_mockup.png",
  description:
    "Users upload a pitch deck (PDF) and receive slide-by-slide AI evaluation flagging weak problem statements, unsupported market claims, and missing GTM logic — then engage in a conversational follow-up Q&A and get a prioritized improvement report. Authenticated sessions, persistent history. I'm building Hive and will need to pitch, so I built the tool I needed.",
  stack: ["React", "Node.js", "Express", "MySQL", "Gemini API", "JWT"],
  arch: ["Upload deck (PDF)", "Slide-by-slide AI eval", "Conversational Q&A", "Prioritized report"],
};

export const signlang: Project = {
  id: "signlang",
  chapter: "04",
  chapterLabel: "What I ship",
  name: "Sign Language Recognition",
  tagline: "Real-time ASL and ISL translation using deep learning.",
  status: "Completed · 2025 · 2nd Runner-Up, TechFiesta",
  image: "/images/sign_lang_mockup.png",
  description:
    "Real-time sign language recognition translating ASL and ISL gestures to English text. Custom CNN at 96.4% accuracy across 91 classes (55 ASL · 36 ISL), plus a speech-to-ISL module for two-way communication. 2nd Runner-Up at the TechFiesta Hackathon, NMIMS Hyderabad.",
  stack: ["Python", "TensorFlow", "Keras", "MediaPipe", "OpenCV", "Flask"],
  stats: [
    { value: "96.4%", label: "Model accuracy" },
    { value: "91", label: "Classes (55 ASL · 36 ISL)" },
    { value: "Real-time", label: "Two-way recognition" },
  ],
  arch: ["Camera", "MediaPipe", "Feature extraction", "CNN", "Classification", "Text / Speech"],
};

export const experience = [
  {
    year: "2026",
    org: "Start Tech Academy",
    role: "Product Manager Intern",
    when: "May 2026 – Jul 2026",
    loc: "Gurugram",
    points: [
      "Wrote and maintained PRDs translating feature requirements into specs for engineering and design",
      "Conducted user research and competitor analysis for EdTech platform product decisions",
      "Analyzed learner engagement data and recommended UX optimizations",
      "Prioritized features based on user feedback, business goals, and market insights",
    ],
  },
  {
    year: "2025",
    org: "Red Bull India",
    role: "Student Marketeer",
    when: "Aug 2025 – Present",
    loc: "Indore",
    points: [
      "Owned end-to-end execution of Canteen Crave — NMIMS Indore's freshers campus activation",
      "Led Red Bull Sundowner at NMOTSAV, the flagship NMIMS cultural fest",
      "Drove Wings for Life World Run registrations and on-ground presence",
      "Activated national campaigns: Red Bull Tetris, Basement, Klear It with KL",
      "Improved event participation and conversion by an estimated 15–20%",
    ],
  },
  {
    year: "2024",
    org: "MU20, School of Opportunity",
    role: "Data Analytics & AI Intern",
    when: "May 2024 – Jul 2024",
    loc: "Indore",
    points: [
      "Improved process efficiency by 35% and research output by 55% via AI tools and GPT automation",
      "Ran market research and 200+ customer interviews",
      "Managed flagship initiative reaching 3,000+ students and 200+ school principals",
      "Led entrepreneurship and hackathon programs across ASEAN; authored 15+ research reports",
    ],
  },
];

export const leadership = [
  {
    role: "President, STME Vertical",
    org: "Sangam Committee, NMIMS Indore",
    year: "2025 – Present",
    stat: "150+",
    statLabel: "people led",
    note: "Organized NMOTSAV, Navratri, Ganesh Chaturthi, Rose Day, and Makar Sankranti.",
  },
  {
    role: "Vice President",
    org: "Vedaana Foundation (NGO)",
    year: "2021 – Present",
    stat: "120+",
    statLabel: "volunteers",
    note: "Stray animal welfare and environmental sustainability. 30+ community drives over 4 years.",
  },
  {
    role: "Co-President",
    org: "Turing Club, NMIMS Indore",
    year: "2024 – 2025",
    stat: "500+",
    statLabel: "participants",
    note: "Organized 10+ flagship technical events.",
  },
  {
    role: "Secretary General",
    org: "GENxMUN",
    year: "MUN",
    stat: "20+",
    statLabel: "conferences chaired",
    note: "Chaired Model United Nations conferences nationwide.",
  },
];

export const skills = {
  Product: ["PRDs", "RICE Prioritization", "User Research", "A/B Testing", "GTM Strategy", "Roadmapping", "Agile", "Jira"],
  Tech: ["Python", "React", "Node.js", "Express", "SQL", "MySQL", "TensorFlow", "OpenCV", "Streamlit"],
  Data: ["NLP", "TF-IDF", "VADER", "Power BI", "Tableau", "Cohen's Kappa", "Statistical Evaluation"],
  Business: ["Business Analysis", "Requirements Gathering", "Stakeholder Management", "Market Research"],
  Languages: ["Python", "SQL", "Java", "C / C++", "R", "JavaScript"],
};

export const certs = [
  "Google Cloud — Compute Basics",
  "Get Started with Jira",
  "Foundations of Cybersecurity",
];

export const whatsNext = {
  roles: ["Product Management", "Business Analysis", "APM", "Data & Analytics"],
  blurb: "Open to internships, 6-month roles, and PPO opportunities.",
  timeline: "Available for opportunities through 2026.",
};

export const builtWith = ["Next.js", "React", "Three.js", "Framer Motion", "Tailwind", "TypeScript"];

export const marqueeItems = [
  "Hive",
  "Zepto Review Intelligence",
  "Red Bull India",
  "MU20",
  "Start Tech Academy",
  "PitchOS",
  "Product",
  "Data",
  "Strategy",
];
