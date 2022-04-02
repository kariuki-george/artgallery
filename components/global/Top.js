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
              src="https://www.prestigeanimalhospital.com/sites/default/files/interesting-cat-facts.jpg"
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
