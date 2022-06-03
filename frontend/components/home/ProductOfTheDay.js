import React from "react";
import styles from "./Pod.module.scss";
import { useRouter } from "next/router";
import Script from "next/script";

function ProductOfTheDay() {
  const router = useRouter();
  const imageurl =
    "https://images.unsplash.com/photo-1646243601727-d98bf72a949b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  const designer = "haha";
  const atOptions = {
    key: "aa41961e2bb7c734586bd7b3f5b18840",
    format: "iframe",
    height: 60,
    width: 468,
    params: {},
  };
  return (
    <div
      className={styles.pod}
      onClick={() => {
        router.push(`/product/${parseInt("10000")}`);
      }}
    >
      {/* <Script type="text/javascript" strategy="lazyOnload">
        {`atOptions = {
        key: "365fdb9819341227e2973b8b414d1740",
        format: "iframe",
        height: 250,
        width: 300,
        params: {},
      };document.write(
        "<scr" +
          'ipt type="text/javascript" src="http' +
          (location.protocol === "https:" ? "s" : "") +
          '://www.effectivedisplayformats.com/365fdb9819341227e2973b8b414d1740/invoke.js"></scr' +
          "ipt>"
      );`}
      </Script> */}
      {/* <img src={imageurl}  alt="product of the day"/>
      <div>@ {designer}</div> */}
    </div>
  );
}

export default ProductOfTheDay;
