import Link from "next/link";

import classes from "./style.module.css";

export function ContactCard() {
  return (
    <>
      <div className={classes.contactCard}>
        <div>{"{"}</div>
        <JsonLine prop="email" value="liam.hillefors@gmail.com" comma />
        <JsonLine prop="phone" value="+46 70 370 02 70" comma />
        <JsonLine prop="location" value="Stockholm, Sweden" />
        <div>{"}"}</div>
      </div>
      <div className={classes.contactCard__links}>
        <ContactEntry
          href="https://github.com/LiamDev06"
          label="github"
          value="LiamDev06"
        />
        <ContactEntry
          href="https://linkedin.com/in/liamhillefors"
          label="linkedin"
          value="liamhillefors"
        />
        <ContactEntry
          href="mailto:liam.hillefors@gmail.com"
          label="email"
          value="liam.hillefors@gmail.com"
        />
      </div>
    </>
  );
}

type JsonLineProps = {
  prop: string;
  value: string;
  comma?: boolean;
};

function JsonLine({ prop, value, comma = false }: JsonLineProps) {
  return (
    <div className={classes.jsonLine}>
      <span className={classes.jsonLine__prop}>"{prop}"</span>:{" "}
      <span className={classes.jsonLine__str}>"{value}"</span>
      {comma === true ? "," : null}
    </div>
  );
}

type ContactEntryProps = {
  href: string;
  label: string;
  value: string;
};

function ContactEntry({ href, label, value }: ContactEntryProps) {
  return (
    <Link
      className={classes.contactEntry}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={classes.contactEntry__label}>{label} </span>
      {value}
    </Link>
  );
}
