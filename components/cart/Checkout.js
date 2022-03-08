import React from "react";
import styles from "./Checkout.module.scss";

function Checkout() {
  return (
    <div className={styles.checkout}>
      <div className={styles.checkout_flow}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </div>
      <div>your orders</div>
      <div className={styles.checkout_list}>
        <li>
          <img
            src="https://images.unsplash.com/photo-1635176592349-17312164d148?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8eEh4WVRNSExnT2N8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="art image"
          />

          <span>shs: 487</span>
        </li>
        <li>
          <img
            src="https://images.unsplash.com/photo-1635176592349-17312164d148?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8eEh4WVRNSExnT2N8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="art image"
          />

          <span>shs: 020387</span>
        </li>
        <li>
          <img
            src="https://images.unsplash.com/photo-1635176592349-17312164d148?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8eEh4WVRNSExnT2N8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="art image"
          />

          <span>shs: 0987</span>
        </li>
      </div>
      <div className={styles.checkout_checkout}>
        <span>Total: 94939</span>
        <button>checkout</button>
      </div>
    </div>
  );
}

export default Checkout;
