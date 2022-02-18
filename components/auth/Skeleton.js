import React from "react";
import styles from "./Skeleton.module.scss";
import { useSelector } from "react-redux";

function Skeleton({ children }) {
  const user = useSelector((state) => state.users.user);

  return (
    <div className={styles.skeleton}>
      <div className={styles.skeleton_top}>
        sign up
        <span className={styles.skeleton_top_info}>{user}</span>
      </div>
      {children}
    </div>
  );
}

export default Skeleton;
