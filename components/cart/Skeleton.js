import React from "react";
import Checkout from "./Checkout";
import PaymentFlow from "./PaymentFlow";
import styles from "./Skeleton.module.scss";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import axios from "axios"
function Skeleton() {
  
  const { user } = useSelector((state) => state.users);
  const getCart = async () => {
    if (!user.id) {
      return [];
    }

    const res = await axios.get(
      `https://api.smiley-geek-codes.tech/api/cart/${user.id}`
    );

    return res.data;
  };
  const { data, isError, isLoading } = useQuery("cart", getCart, {
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return "loading";
  }
  if (isError) {
    return toast.error("check your network");
  }
  return (
    <div className={styles.skeleton}>
      <PaymentFlow data={data}/>
      {data.length != 0 && <Checkout />}
    </div>
  );
}

export default Skeleton;
