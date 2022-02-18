import React from "react";
import Sidebar from "../../components/auth/Sidebar";
import styles from "../../styles/Pages.module.css";
import Link from "next/link";
import Login from "../../components/auth/Login";

function login() {
  return (
    <div className={styles.page}>
      <Sidebar />
      <Login />
    </div>
  );
}

export default login;
