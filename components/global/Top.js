import React, { useState } from "react";
import styles from "./Top.module.scss";

function Top() {
  const [auth, setAuth] = useState(true);
  return (
    <div className={styles.top}>
      {!auth && <div>Art Gallery</div>}

      {/* {auth && (
        <div className={styles.top_auth}>
          <div>Art Gallery</div>
          <div className={styles.top_hero}>
            <img
              className={styles.top_cat_icon}
              src="https://www.prestigeanimalhospital.com/sites/default/files/interesting-cat-facts.jpg"
            />
            <p className={styles.top_cat_hi}>Hi Gab</p>
          </div>
        </div>
      )} */}
      {auth && (
        <div className={styles.top_auth}>
          <h1>Art Gallery</h1>
          <div className={styles.top_hero}>
            <img
              className={styles.top_cat_icon}
              src="https://www.prestigeanimalhospital.com/sites/default/files/interesting-cat-facts.jpg"
            />
            <div>
              <p className={styles.top_cat_hi}>
                Hi <span>Gab</span>
              </p>
              <p>user</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Top;
