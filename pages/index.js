import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/global/sidebar";
import styles from "../styles/Home.module.css";

//in components folder, global folder will be used for components that are reused in different pages eg the sidebar.
//styles for files under pages are in styles folder...pages folder is used to serve pages ...

export default function Home() {
  return (
    <div className={styles.home}>
      <Sidebar />
      homepage
    </div>
  );
}
