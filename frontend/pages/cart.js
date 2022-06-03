import React from "react";
import Sidebar from "../components/global/Sidebar";
import Skeleton from "../components/cart/Skeleton";
import Styles from "../styles/Pages.module.css";
import Head from "next/head";

function Cart() {
  return (
    <div className={Styles.page}>
      <Head>
        <title>cart</title>
      </Head>
      <Sidebar />
      <Skeleton />
    </div>
  );
}

export default Cart;
