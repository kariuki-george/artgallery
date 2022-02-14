import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/global/sidebar";

//in components folder, global folder will be used for components that are reused in different pages eg the sidebar.

export default function Home() {
  return (
    <div>
      <Sidebar />
    </div>
  );
}
