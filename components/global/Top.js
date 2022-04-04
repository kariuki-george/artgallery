import React, { useState } from "react";
import styles from "./Top.module.scss";
import { useSelector } from "react-redux";

function Top() {
  const user = useSelector((state) => state.users);

  return (
    <div className={styles.top}>
      {!user.isLoggedIn && <div>Art Gallery</div>}

     
      {user.isLoggedIn && (
        <div className={styles.top_auth}>
          <h1>Art Gallery</h1>
          <div className={styles.top_hero}>
            <img
              className={styles.top_cat_icon}
              alt="hero image"
              src="https://images.unsplash.com/photo-1456086272160-b28b0645b729?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <div>
              <p className={styles.top_cat_hi}>
                Hi <span>{   user.user?.name.split(" ")[0]}</span>
              </p>
              <p>{user.user?.role}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Top;
