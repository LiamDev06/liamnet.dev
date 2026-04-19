import type { ReactNode } from "react";

export type ExperienceEntryData = {
  role: string;
  date: string;
  org: string;
  items: ReactNode[];
};

export const experienceEntries: ExperienceEntryData[] = [
  {
    role: "Software Engineer",
    date: "Jun 2025 — present",
    org: "Organization",
    items: ["Demo item"],
  },
];

export type SkillGroupData = {
  title: string;
  tags: string[];
};

export const skillGroups: SkillGroupData[] = [
  {
    title: "AI...",
    tags: ["Some tag..."],
  },
  {
    title: "Languages & Frameworks",
    tags: ["Java"],
  },
];

export type EducationEntryData = {
  name: string;
  sub: string;
  note?: string;
};

export const educationEntries: EducationEntryData[] = [
  {
    name: "Some School",
    sub: "Some program",
    note: "Some note",
  },
];
