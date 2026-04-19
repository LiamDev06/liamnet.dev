"use client";

import { useEffect, useState } from "react";
import classNames from "classnames";

import classes from "./style.module.css";

const MODES = ["normal", "plan", "bypass"] as const;
type Mode = (typeof MODES)[number];

export function BottomInputBar() {
  const [mode, setMode] = useState<Mode>("bypass");
  const [input, setInput] = useState("");

  function getModeLabel(): string {
    switch (mode) {
      case "normal":
        return "";
      case "plan":
        return "⏸ plan mode on";
      case "bypass":
        return "⏵⏵ bypass permissions on";
    }
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === "Tab" && event.shiftKey) {
        event.preventDefault();
        setMode(
          (current) => MODES[(MODES.indexOf(current) + 1) % MODES.length]
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={classes.bottomInputBar}>
      <div className={classes.bottomInputBar__wrapper}>
        <div className={classes.bottomInputBar__box}>
          <span className={classes.bottomInputBar__caret}>&gt;</span>
          <div className={classes.bottomInputBar__inputWrapper}>
            <input
              autoFocus
              type="text"
              className={classes.bottomInputBar__input}
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <div className={classes.bottomInputBar__display} aria-hidden="true">
              {input === "" ? (
                <span className={classes.bottomInputBar__placeholderText}>
                  Ask about Liam's experience
                </span>
              ) : (
                <span className={classes.bottomInputBar__typed}>{input}</span>
              )}
              <span className={classes.bottomInputBar__cursor} />
            </div>
          </div>
        </div>
        <div className={classes.bottomInputBar__meta}>
          <span className={classes.bottomInputBar__modeGroup}>
            <span
              className={classNames({
                [classes["bottomInputBar__mode--plan"]]: mode === "plan",
                [classes["bottomInputBar__mode--bypass"]]: mode === "bypass",
              })}
            >
              {getModeLabel()}
            </span>
            <span className={classes.bottomInputBar__hint}>
              (shift+tab to cycle)
            </span>
          </span>
          <div className={classes.bottomInputBar__right}>
            <span>$0.00</span>
            <span>claude-opus-4-7</span>
          </div>
        </div>
      </div>
    </div>
  );
}
