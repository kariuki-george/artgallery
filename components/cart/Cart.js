import React, { useState } from "react";
import MiniSkeleton from "./MiniSkeleton";
import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCheckout } from "../../state/slices/checkoutFlow";

function Cart({ data }) {
  const dispatch = useDispatch();
  const { checkoutList } = useSelector((state) => state.checkout);

  const handleCheckout = (item) => {
    let present = [];
    present = checkoutList.filter((product) => {
      if (product.id == item.id) {
        return product;
      }
    });

    present.length == 0 && dispatch(addToCheckout(item));
  };

  return (
    <MiniSkeleton heading={"Your Cart"}>
      {data.length === 0 && <li className={styles.cart}>Your cart is empty</li>}

      {data.map((item) => (
        <li key={item.id} className={styles.cart}>
          <img src={item.imageurl} alt="art image" />
          <div>
            <span>shs: {item.price}</span>
            <button onClick={() => handleCheckout(item)}>buy</button>
          </div>
        </li>
      ))}
    </MiniSkeleton>
  );
}

export default Cart;
