import React from "react";
import styles from "./Sidebar.module.scss";
import Link from "next/link";
import Top from "./Top";
import Middle from "./Middle";
import Bottom from "./Bottom";

function sidebar() {
  return (
    <div className={styles.sidebar}>
      <Top />
      <Middle />
      <Bottom />
    </div>
  );
}

export default sidebar;
