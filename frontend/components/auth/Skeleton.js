import React, { useEffect, useState } from "react";
import styles from "./Skeleton.module.scss";
import { useSelector } from "react-redux";

function Skeleton({ children, authState }) {
  const user = useSelector((state) => state.users.user);

  const [role, SetRole] = useState("");

  useEffect(() => {
    if (user === "buyer") {
      return SetRole("buyer");
    }
    if (user === "designer") {
      return SetRole("Proceed only if you are a designer");
    }
    if (user === "admin") {
      return SetRole("Proceed only if you are an admin");
    }
  }, [user]);

  return (
    <div className={styles.skeleton}>
      <div className={styles.skeleton_top}>
        {authState}
        <span className={styles.skeleton_top_info}>
          {role === "buyer" ? "" : role}
        </span>
      </div>
      {children}
    </div>
  );
}

export default Skeleton;
