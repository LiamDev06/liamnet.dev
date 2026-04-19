import type { ExperienceEntryData } from "@/app/(root)/resumeDummyData";

import classes from "./style.module.css";

type ExperienceEntryProps = {
  entry: ExperienceEntryData;
};

export function ExperienceEntry({ entry }: ExperienceEntryProps) {
  const { role, date, org, items } = entry;

  return (
    <div className={classes.experienceEntry}>
      <div className={classes.experienceEntry__head}>
        <span className={classes.experienceEntry__role}>{role}</span>
        <span className={classes.experienceEntry__date}>{date}</span>
      </div>
      <div className={classes.experienceEntry__org}>{org}</div>
      <ul className={classes.experienceEntry__items}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
