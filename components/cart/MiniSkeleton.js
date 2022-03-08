import React from "react";
import styles from "./MiniSkeleton.module.scss";

const MiniSkeleton = ({ children, heading }) => {
  return (
    <div className={styles.miniskeleton}>
      <span className={styles.miniskeleton_heading}>{heading}</span>
      <div className={styles.miniskeleton_body}>{children}</div>
    </div>
  );
};

export default MiniSkeleton;
