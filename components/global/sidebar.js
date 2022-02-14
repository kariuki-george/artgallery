import React from "react";
import styles from "./sidebar.module.scss";
import Link from "next/link";

//Link is nextjs equivalent to anchor(a) elememt in pure html.....

function sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_top}>top part</div>
      <div className={styles.sidebar_middle}>
        <Link href="/">
          <span>home</span>
        </Link>
        <Link href="/cart">
          <span>cart</span>
        </Link>
      </div>
      <div className={styles.sidebar_bottom}>
        <Link href="/">
          <span>help</span>
        </Link>
        <Link href="/">
          <span>about</span>
        </Link>
        <Link href="/">
          <span>privacy</span>
        </Link>
        <Link href="/auth/login">
          <span>sign in</span>
        </Link>
      </div>
    </div>
  );
}

export default sidebar;
