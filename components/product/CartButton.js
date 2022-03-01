import React from "react";
import toast from "react-hot-toast";

import styles from "./CartButton.module.scss";

function CartButton() {
    const handleAddToCart=()=>{toast.success("Added...maybe")}
  return (
    <div className={styles.cartbutton}>
      <span>price</span>
      <span className={styles.cartbutton_cart} onClick={handleAddToCart}>Add to cart</span>
      <span>@willy</span>
    </div>
  );
}

export default CartButton;
