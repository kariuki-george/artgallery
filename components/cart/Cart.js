import React from "react";
import MiniSkeleton from "./MiniSkeleton";
import styles from "./Cart.module.scss";

function Cart() {
  return (
    <MiniSkeleton heading={"Your Cart"}>
      <li className={styles.cart}>
        <img
          src="https://images.unsplash.com/photo-1635176592349-17312164d148?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8eEh4WVRNSExnT2N8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="art image"
        />
<div>    <span>shs: 487</span>
        <button>buy</button></div>
    
      </li>
    </MiniSkeleton>
  );
}

export default Cart;
