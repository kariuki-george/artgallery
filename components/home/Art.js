import React from "react";
import Artwork from "./Artwork.js";
import styles from "./Art.module.scss";

function Art() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className={styles.art}>
      {list.map(() => {
        return <Artwork />;
      })}
    </div>
  );
}

export default Art;
