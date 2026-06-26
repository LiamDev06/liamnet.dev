import type {
  ExperienceEntryData,
  PressEntryData,
  SkillGroupData,
} from "./types";

export const experienceEntries: ExperienceEntryData[] = [
  {
    role: "Full-Stack Engineer & Product Manager",
    date: "Jun 2025 — present",
    subtitle: "Meitner · EdTech · Stockholm",
    summary:
      "Sole engineer behind Meitner AI: an end-to-end production AI system grounded in the Swedish " +
      "national curriculum for lesson planning, material creation, and student feedback. Used by " +
      "20,000+ teachers across 350+ Swedish schools, with outputs reaching 70,000+ students " +
      "downstream. Joined straight out of high school post-acquisition, shaping the product through " +
      "direct discovery with teachers, school leadership, and enterprise customers.",
  },
  {
    role: "Java Developer & QA Tester",
    date: "Jan 2024 — Jun 2025",
    subtitle: "Meraki Studios · Game Development · Remote (Amsterdam)",
    summary:
      "External developer and QA tester for Meraki Studios, an official Minecraft partner studio. " +
      "Built Java gameplay systems for client projects and ran QA on Bedrock Add-Ons shipped " +
      "through Microsoft's official Minecraft Marketplace.",
  },
  {
    role: "Java Developer",
    date: "Jun 2023 — Jun 2025",
    subtitle: "SpaceDelta · Game Development · Remote",
    summary:
      "Contracted to build gameplay systems and server-side features for SpaceDelta, " +
      "a large-scale Minecraft network.",
  },
];

export const pressEntries: PressEntryData[] = [
  {
    title:
      "Company of the Year 2025: 1st place out of 43,000+ students across 11,000+ companies",
    publication: "Junior Achievement Sweden",
    type: "event",
    url: "https://ungforetagsamhet.se/ung-foretagsamhet-sverige/ai-tjanst-larare-vann-arets-uf-foretag-har-ar-alla-vinnarna-pa-sm-i-ung",
    date: "2025",
  },
  {
    title: "Meitner acquires AI startup",
    publication: "Breakit",
    type: "press",
    url: "https://www.breakit.se/artikel/43234/adrian-anderssons-meitner-koper-18-aringarnas-ai-startup-for-bra-for-uf",
    date: "2025",
  },
  {
    title: "Meeting with Sweden's Minister for Upper Secondary School",
    publication: "Junior Achievement Sweden",
    type: "event",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7371524343488602113/",
    date: "2025",
  },
  {
    title:
      "Featured on Nyhetsmorgon, Sweden's national morning show, the morning " +
      "after winning Junior Achievement Sweden",
    publication: "TV4",
    type: "tv",
    url: "https://www.tv4play.se/program/67ff22880e988cd4d149/nyhetsmorgon",
    date: "2025",
  },
  {
    title: "Radio interview ahead of representing Sweden at JA Europe",
    publication: "Sveriges Radio",
    type: "radio",
    url: "https://www.sverigesradio.se/avsnitt/2613074",
    date: "2025",
  },
  {
    title: "Represented Sweden at JA Europe Company of the Year",
    publication: "Junior Achievement Sweden",
    type: "event",
    url: "https://ungforetagsamhet.se/ung-foretagsamhet-sverige/gen-e-2025-samlade-europas-unga-entreprenorer-i-aten",
    date: "2025",
  },
  {
    title:
      "Built an AI tool for teachers, won the Swedish national championship, " +
      "and got acquired before graduation",
    publication: "TN",
    type: "press",
    url: "https://www.tn.se/entreprenorskap/45530/byggde-ai-tjanst-for-larare-vann-sm-och-blev-uppkopta-innan-studenten/",
    date: "2025",
  },
  {
    title: "The students who built AI for teachers for a few hundred kronor",
    publication: "Dagens Industri",
    type: "press",
    url: "https://www.di.se/digital/studenterna-har-byggt-ai-for-larare-nagra-hundralappar/",
    date: "2025",
  },
];

export const skillGroups: SkillGroupData[] = [
  {
    title: "AI & LLM Engineering",
    tags: [
      "Compound AI Systems",
      "Inference Orchestration",
      "Fine-Tuning (SFT) & Data Curation",
      "LLM Evals",
      "RAG",
    ],
  },
  {
    title: "Languages & Frameworks",
    tags: [
      "Java",
      "Python",
      "TypeScript",
      "SQL",
      "React",
      "Node.js",
      "Spring Boot",
    ],
  },
  {
    title: "Infrastructure",
    tags: ["PostgreSQL", "MongoDB", "Redis", "CI/CD", "Grafana"],
  },
  {
    title: "Communication & Leadership",
    tags: [
      "Customer Discovery",
      "Stakeholder Alignment",
      "Cross-functional Collaboration",
    ],
  },
];
