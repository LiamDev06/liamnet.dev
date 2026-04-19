import classes from "./style.module.css";

type EducationEntryProps = {
  name: string;
  sub: string;
  note?: string;
};

export function EducationEntry({ name, sub, note }: EducationEntryProps) {
  return (
    <div className={classes.educationEntry}>
      <div className={classes.educationEntry__name}>{name}</div>
      <div className={classes.educationEntry__sub}>{sub}</div>
      {note !== undefined ? (
        <div className={classes.educationEntry__note}>{note}</div>
      ) : null}
    </div>
  );
}
