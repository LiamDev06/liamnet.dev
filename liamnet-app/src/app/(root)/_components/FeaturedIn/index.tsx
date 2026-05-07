import classNames from "classnames";

import type { PressEntryData } from "@/app/(root)/types";

import classes from "./style.module.css";

type FeaturedInProps = {
  entries: PressEntryData[];
};

const TYPE_LABELS: Record<PressEntryData["type"], string> = {
  tv: "TV",
  radio: "Radio",
  press: "Press",
  event: "Event",
  newsletter: "Newsletter",
};

export function FeaturedIn({ entries }: FeaturedInProps) {
  return (
    <div className={classes.featuredIn}>
      {entries.map((entry, index) => (
        <a
          key={index}
          href={entry.url}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.featuredIn__entry}
        >
          <div className={classes.featuredIn__entryTop}>
            <div className={classes.featuredIn__entryLeft}>
              <span className={classes.featuredIn__publication}>
                {entry.publication}
              </span>
              <span
                className={classNames(
                  classes.featuredIn__badge,
                  classes[`featuredIn__badge--${entry.type}`]
                )}
              >
                {TYPE_LABELS[entry.type]}
              </span>
            </div>
            <div className={classes.featuredIn__entryRight}>
              <span className={classes.featuredIn__arrow}>↗</span>
            </div>
          </div>
          <p className={classes.featuredIn__title}>{entry.title}</p>
        </a>
      ))}
    </div>
  );
}
