export type ExperienceEntryData = {
  role: string;
  date: string;
  subtitle: string;
  summary: string;
};

export type PressEntryType = "tv" | "radio" | "press" | "event" | "newsletter";

export type PressEntryData = {
  title: string;
  publication: string;
  type: PressEntryType;
  url: string;
  date: string;
};

export type SkillGroupData = {
  title: string;
  tags: string[];
};
