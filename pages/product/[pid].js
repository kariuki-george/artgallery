import React from "react";
import { useRouter } from "next/router";
import Sidebar from "../../components/global/Sidebar";
import Product from "../../components/product/Product";
import styles from "../../styles/Pages.module.css";

function product() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div className={styles.page}>
      <Sidebar />
      <Product pid={pid} />
    </div>
  );
}

export default product;
