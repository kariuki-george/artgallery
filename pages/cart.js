import React from "react";
import Sidebar from "../components/global/Sidebar";
import Skeleton from "../components/cart/Skeleton";
import Styles from "../styles/Pages.module.css";

function cart() {
  return (
    <div className={Styles.page}>
      <Sidebar />
      <Skeleton />
    </div>
  );
}

export default cart;
