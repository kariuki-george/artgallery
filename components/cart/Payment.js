import React from "react";
import MiniSkeleton from "./MiniSkeleton";
import styles from "./Payment.module.scss";

function Payment() {
  return (
    <MiniSkeleton heading="Payment">
      <form className={styles.payment}>
        <input
          type="email"
          placeholder="kariukigeorge2030@gmail.com"
          disabled
          //   value={name}
          //   onChange={(e) => {
          //     setName(e.target.value);
          //   }}
        />
        <input
          type="text"
          placeholder="0748440468"
          disabled
          //   value={name}
          //   onChange={(e) => {
          //     setName(e.target.value);
          //   }}
        />
        <input type="number" placeholder="67809" disabled />
        <select>
          <option>Choose a pickup point</option>
          <option>jkuat</option>
          <option>ku</option>
          <option>uon</option>
        </select>
        <button>pay now</button>
      </form>
    </MiniSkeleton>
  );
}

export default Payment;
