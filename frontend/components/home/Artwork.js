import React from "react";
import styles from "./Artwork.module.scss";
import { useRouter } from "next/router";

function Artwork({ id, imageurl, designer_name }) {
  const router = useRouter();
  return (
    <div
      className={styles.artwork}
      onClick={() => {
        router.push(`/product/${parseInt(id)}`);
      }}
    >
      <img src={imageurl} alt={designer_name} />
      <div>@ {designer_name}</div>
    </div>
  );
}

export default Artwork;
