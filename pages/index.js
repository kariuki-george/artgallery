import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/global/Sidebar";
import styles from "../styles/Pages.module.css";
import Products from "../components/home/Products";

//in components folder, global folder will be used for components that are reused in different pages eg the sidebar.
//styles for files under pages are in styles folder...pages folder is used to serve pages ...

export default function Home() {
  return (
    <div className={styles.page}>
      <Sidebar />

      <Products />
    </div>
  );
}
