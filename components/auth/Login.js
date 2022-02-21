import React from "react";
import Link from "next/link";
import Skeleton from "./Skeleton";
import styles from "./Register.module.scss";

function Login() {
  const handleLogin = () => {};

  return (
    <div className={styles.register}>
      <Skeleton>
        <form>
          <label>email</label>

          <input
            type="email"
            placeholder="johndoe@email.com"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <label>password</label>
          <input
            type="password"
            placeholder="passw123"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />

          <button>login</button>
        </form>
        <h4>
          Don't have an account?{" "}
          {
            <Link href="/auth/register">
              <span>Register</span>
            </Link>
          }
        </h4>
      </Skeleton>
    </div>
  );
}

export default Login;
