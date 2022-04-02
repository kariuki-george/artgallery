import React from "react";
import { useRouter } from "next/router";
import Sidebar from "../../components/global/Sidebar";
import Product from "../../components/product/Product";
import styles from "../../styles/Pages.module.css";
import { useQuery } from "react-query";
import toast from "react-hot-toast";
import axios from "axios";

function product() {



  const router = useRouter();

  

  const getProduct = async () => {
    const res = await axios.get(
      "https://api.smiley-geek-codes.tech/api/products/" + router.query.pid
    );

    return res.data;
  };
  const {
    data,

    isError,
    status,
    isSuccess,
    isFetching,
  } = useQuery(
    ["product", router.query.pid],

    getProduct,
    {
      cacheTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
    }
  );

  status.success && toast.success("success");
  isError && toast.success("Error: Check your network");
  isSuccess && console.log("data", data);
  return (
    <div className={styles.page}>
      <Sidebar />
      {isFetching && "loading"}
      {isSuccess && <Product isFetching={isFetching} product={data} />}
    </div>
  );
}

export default product;
