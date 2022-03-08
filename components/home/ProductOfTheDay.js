import React from "react";
import styles from "./Pod.module.scss";
import { useRouter } from "next/router";

function ProductOfTheDay() {
  const router = useRouter();
  const imageurl =
    "https://images.unsplash.com/photo-1646243601727-d98bf72a949b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  const designer = "haha";
  return (
    <div
      className={styles.pod}
      onClick={() => {
        router.push(`/product/${parseInt("10000")}`);
      }}
    >
      <img src={imageurl} />
      <div>@ {designer}</div>
    </div>
  );
}

export default ProductOfTheDay;
