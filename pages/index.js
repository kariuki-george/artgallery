import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/global/Sidebar";
import styles from "../styles/Pages.module.css";
import Products from "../components/home/Products";
import { useQuery } from "react-query";
import axios from "axios";
import toast from "react-hot-toast";

//in components folder, global folder will be used for components that are reused in different pages eg the sidebar.
//styles for files under pages are in styles folder...pages folder is used to serve pages ...

export default function Home() {
  const getProducts = async () => {
    const res = await axios.get(
      "https://api.smiley-geek-codes.tech/api/products"
    );
    return res.data;
  };
  const {
    data,

    isError,
    status,
    isSuccess,
    isFetching,
  } = useQuery("products", getProducts, {
    cacheTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  

  status.success && toast.success("success");
  isError && toast.success("Error: Check your network");

  return (
    <div className={styles.page}>
      <Sidebar />

      {<Products isFetching={isFetching} products={data} />}
    </div>
  );
}
