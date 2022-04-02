import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MiniSkeleton from "./MiniSkeleton";
import toast from "react-hot-toast";
import styles from "./Payment.module.scss";
import { nextStage } from "../../state/slices/checkoutFlow";

function Payment() {
  const { user } = useSelector((state) => state.users);
  const { total } = useSelector((state) => state.checkout);
  const [addr, setAddr] = useState("");
  const dispatch = useDispatch();

  const handlePayment = (e) => {
    e.preventDefault();
    if (addr == "") {
      return toast.error("Please choose a pickup point");
    }
    const order = {
      total,
      phonenumber: user.phonenumber,
      buyerId: user.id,
      email: user.email,
      pickup: addr,
    };
    console.log(order);
    dispatch(nextStage());
  };
  return (
    <MiniSkeleton heading="Payment">
      <form className={styles.payment}>
        <input
          type="email"
          disabled
          value={user.email}
          //   onChange={(e) => {
          //     setName(e.target.value);
          //   }}
        />
        <input
          type="text"
          disabled
          value={"+254" + user.phonenumber}
          //   onChange={(e) => {
          //     setName(e.target.value);
          //   }}
        />
        <input type="number" placeholder={total} disabled />
        <select
          onChange={(e) => {
            setAddr(e.target.value);
          }}
        >
          <option>Choose a pickup point</option>
          <option>jkuat</option>
          <option>ku</option>
          <option>uon</option>
        </select>
        <button onClick={handlePayment}>pay now</button>
      </form>
    </MiniSkeleton>
  );
}

export default Payment;
