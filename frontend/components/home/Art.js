import React, { useState } from "react";
import Artwork from "./Artwork.js";
import styles from "./Art.module.scss";

function Art({ products }) {
  
  return (
    <div className={styles.art}>
      {products.map((art) => {
        return (
          <Artwork
            key={art.id}
            id={art.id}
            imageurl={art.imageurl}
            designer_name={art.designer_name}
          />
        );
      })}
    </div>
  );
}

export default Art;
