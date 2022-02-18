import React, { useState } from "react";
import styles from "./Bottom.module.scss";
import Link from "next/link";

function Bottom() {
  const [auth, setAuth] = useState(true);
  return (
    <div className={styles.bottom}>
      <Link href="/">
        <span>help</span>
      </Link>
      <Link href="/">
        <span>about</span>
      </Link>
      <Link href="/">
        <span>privacy</span>
      </Link>
      {/* checks if is auth */}
      <Link href="/auth/login">
        <span>{auth ? "sign in " : "sign out"}</span>
      </Link>
    </div>
  );
}

export default Bottom;
