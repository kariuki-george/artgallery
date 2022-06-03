import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MiniSkeleton from "./MiniSkeleton";
import toast from "react-hot-toast";
import styles from "./Payment.module.scss";
import { nextStage } from "../../state/slices/checkoutFlow";
import axios from "axios";
import { useMutation } from "react-query";

function Payment() {
  const { user } = useSelector((state) => state.users);
  const { total, checkoutList } = useSelector((state) => state.checkout);

  const [addr, setAddr] = useState("");
  const dispatch = useDispatch();

  const mutation = useMutation((product) => {
    const response = axios.post(
      "https://api.smiley-geek-codes.tech/api/pay",
      product
    );
    return response.data;
  });

  const handlePayment = (e) => {
    e.preventDefault();
    if (addr == "") {
      return toast.error("Please choose a pickup point");
    }
    const order = {
      Amount: total,
      PhoneNumber: "254" + user.phonenumber,
      buyerId: user.id,
      email: user.email,
      pickupPoint: addr,
      checkoutList,
    };

    mutation.mutate(order);
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
        <button disabled={mutation.isLoading} onClick={handlePayment}>
          pay now
        </button>
      </form>
    </MiniSkeleton>
  );
}

export default Payment;
