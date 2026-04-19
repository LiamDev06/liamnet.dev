import classes from "./style.module.css";

type SkillGroupProps = {
  title: string;
  tags: string[];
};

export function SkillGroup({ title, tags }: SkillGroupProps) {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      <div className={classes.skillGroup}>
        {tags.map((tag) => (
          <span key={tag} className={classes.skillGroup__tag}>
            {tag}
          </span>
        ))}
      </div>
    </>
  );
}

type SectionTitleProps = {
  children: string;
};

function SectionTitle({ children }: SectionTitleProps) {
  return <div className={classes.sectionTitle}>{children}</div>;
}
