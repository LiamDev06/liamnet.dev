import Image from "next/image";

import classes from "./style.module.css";

export function TopBar() {
  return (
    <div className={classes.topBar}>
      <div className={classes.topBar__left}>
        <div className={classes.topBar__dot} />
        <span>~/liam-hillefors</span>
      </div>
      <a
        href="https://github.com/LiamDev06/liamnet.dev"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.topBar__githubLink}
        aria-label="View source on GitHub"
      >
        <Image
          src="/GitHub_Invertocat_White.svg"
          alt=""
          width={15}
          height={15}
          aria-hidden
        />
        <span>check out the code</span>
      </a>
    </div>
  );
}
