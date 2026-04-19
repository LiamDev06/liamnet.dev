import type { ReactNode } from "react";

import classes from "./style.module.css";

type AssistantMessageProps = {
  children: ReactNode;
};

export function AssistantMessage({ children }: AssistantMessageProps) {
  return <div className={classes.assistantMessage}>{children}</div>;
}
