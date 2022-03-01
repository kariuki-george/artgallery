import React from "react";
import styles from "./Middle.module.scss";
import Link from "next/link";
import { useSelector } from "react-redux";

function Middle() {
  const user = useSelector((state) => state.users.user);

  return (
    <div className={styles.middle}>
      <Link href="/">
        <span>home</span>
      </Link>

      <Link href="/cart">
        <span>cart</span>
      </Link>
      {/* designer specific routes */}
      {user.role === "designer" && (
        <>
          <Link href="/designer/create">
            <span>create</span>
          </Link>
          <Link href="/designer/notifications">
            <span>notifications</span>
          </Link>
        </>
      )}
      {/* admin specific routes */}
      {user.role === "admin" && (
        <>
          <Link href="/admin/products">
            <span>products</span>
          </Link>
          <Link href="/admin/designers">
            <span>designers</span>
          </Link>
        </>
      )}
    </div>
  );
}

export default Middle;
