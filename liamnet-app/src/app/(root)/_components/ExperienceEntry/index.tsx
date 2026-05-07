import type { ExperienceEntryData } from "@/app/(root)/types";

import classes from "./style.module.css";

type ExperienceEntryProps = {
  entry: ExperienceEntryData;
};

export function ExperienceEntry({ entry }: ExperienceEntryProps) {
  const { role, date, subtitle, summary } = entry;

  return (
    <div className={classes.experienceEntry}>
      <div className={classes.experienceEntry__head}>
        <span className={classes.experienceEntry__role}>{role}</span>
        <span className={classes.experienceEntry__date}>{date}</span>
      </div>
      <div className={classes.experienceEntry__subtitle}>{subtitle}</div>
      <p className={classes.experienceEntry__summary}>{summary}</p>
    </div>
  );
}
