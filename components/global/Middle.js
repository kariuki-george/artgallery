import React, { useEffect, useState } from "react";
import styles from "./Middle.module.scss";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import axios from "axios";

function Middle() {
  const { user } = useSelector((state) => state.users);
  const getCart = async () => {
    if (!user.id) {
      return [];
    }

    const res = await axios.get(
      `https://api.smiley-geek-codes.tech/api/cart/${user.id}`
    );

    return res.data;
  };
  const { data} = useQuery("cart", getCart, {
    cacheTime: 10 * 1000,
    refetchOnWindowFocus: false,
  });


  return (
    <div className={styles.middle}>
      <Link href="/">
        <span>home</span>
      </Link>

      {
        <Link href="/cart">
          <span>
            cart{" "}
            <span
              style={{
                backgroundColor: "red",
                color: "white",
                borderRadius: "20px",
                paddingRight: "3px",
                paddingLeft: "3px",
                fontSize: "13px",
                margin: "2px",
              }}
            >
              {data?.length}
            </span>
          </span>
        </Link>
      }
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
      {/* admin specific routes*/}
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
