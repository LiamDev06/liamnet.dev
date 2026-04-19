import classes from "./style.module.css";

export function TopBar() {
  return (
    <div className={classes.topBar}>
      <div className={classes.topBar__left}>
        <div className={classes.topBar__dot} />
        <span>~/liam-hillefors</span>
      </div>
    </div>
  );
}
