import React from "react";
import Checkout from "./Checkout";
import PaymentFlow from "./PaymentFlow";
import styles from "./Skeleton.module.scss";

function Skeleton() {
  return (
    <div className={styles.skeleton}>
      <PaymentFlow />
      <Checkout />
    </div>
  );
}

export default Skeleton;
