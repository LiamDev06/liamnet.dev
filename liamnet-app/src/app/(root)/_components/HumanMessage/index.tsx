import type { ReactNode } from "react";

import classes from "./style.module.css";

type HumanMessageProps = {
  children: ReactNode;
};

export function HumanMessage({ children }: HumanMessageProps) {
  return (
    <div className={classes.humanMessage}>
      <hr className={classes.humanMessage__separator} />
      <div className={classes.humanMessage__inner}>
        <span className={classes.humanMessage__marker}>&gt;</span>
        <span className={classes.humanMessage__text}>{children}</span>
      </div>
      <hr className={classes.humanMessage__separator} />
    </div>
  );
}
