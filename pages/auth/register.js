import React from "react";
import Sidebar from "../../components/auth/Sidebar";
import Register from "../../components/auth/Register";
import styles from "../../styles/Pages.module.css";

function register() {
  return (
    <div className={styles.page}>
      <Sidebar />
      <Register />
    </div>
  );
}

export default register;
