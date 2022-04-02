import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import styles from "./CartButton.module.scss";
import axios from "axios";


function CartButton({ product, price, designer_name }) {
  const { isLoggedIn, user } = useSelector((state) => state.users);

  const router = useRouter();

  const mutation = useMutation((data) => {
    const response = axios.post(
      "https://api.smiley-geek-codes.tech/api/cart",
      data
    );
    console.log(response.data)
    return response.data;
  });

  const handleAddToCart = (data) => {
    if (!isLoggedIn) {
      return router.push(`/auth/login?redirect=true&location=${router.asPath}`);
    }
    console.log(data);

    mutation.mutate(data);
  };

  return (
    <div className={styles.cartbutton}>
      {mutation.isSuccess && toast.success("Added successfully")}
      <span>Ksh: {price}</span>
      <span
        className={styles.cartbutton_cart}
        onClick={() => {
          handleAddToCart({ ...product, user_id: user.id });
        }}
      >
        Add to cart
      </span>
      <span>@{designer_name}</span>
    </div>
  );
}

export default CartButton;
