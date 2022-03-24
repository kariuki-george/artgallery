import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import styles from "./CartButton.module.scss";

function CartButton() {
  const { isLoggedIn } = useSelector((state) => state.users);

  const router = useRouter();

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      return router.push(`/auth/login?redirect=true&location=${router.asPath}`);
    }

    toast.success("Added...maybe");
  };
  return (
    <div className={styles.cartbutton}>
      <span>price</span>
      <span className={styles.cartbutton_cart} onClick={handleAddToCart}>
        Add to cart
      </span>
      <span>@willy</span>
    </div>
  );
}

export default CartButton;
