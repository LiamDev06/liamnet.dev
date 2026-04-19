"use client";

import { useState } from "react";
import type { ReactNode } from "react";

import classes from "./style.module.css";

type ToolBlockProps = {
  label: string;
  argument?: string;
  status?: string;
  children: ReactNode;
};

export function ToolBlock({
  label,
  argument,
  status,
  children,
}: ToolBlockProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  function toggle() {
    setIsOpen((previous) => !previous);
  }

  return (
    <div className={classes.toolBlock}>
      <button
        type="button"
        className={classes.toolBlock__head}
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <span className={classes.toolBlock__chevron}>{isOpen ? "▼" : "▶"}</span>
        <span className={classes.toolBlock__label}>{label}</span>
        {argument !== undefined ? (
          <span className={classes.toolBlock__arg}>{argument}</span>
        ) : null}
        {status !== undefined ? (
          <span className={classes.toolBlock__status}>{status}</span>
        ) : null}
      </button>
      {isOpen ? (
        <div className={classes.toolBlock__body}>{children}</div>
      ) : null}
    </div>
  );
}
