import React from "react";
import MiniSkeleton from "./MiniSkeleton";
import styles from "./Processing.module.scss"

function Processing() {
  return (
    <MiniSkeleton heading="Processing">
      <span className={styles.processing}>Thanks for you purchase. </span>
    </MiniSkeleton>
  );
}

export default Processing;

