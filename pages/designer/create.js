import React from "react";
import Sidebar from "../../components/global/Sidebar";
import styles from "../../styles/Pages.module.css";
import Upload from "../../components/designer/Upload"

function create() {
  return (
    <div className={styles.page}>
      <Sidebar />
      <Upload/>
    </div>
  );
}

export default create;
