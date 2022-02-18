import React from "react";
import Link from "next/link";
import Skeleton from "./Skeleton";
import styles from "./Register.module.scss";

function Register() {
  const handleLogin = () => {};
  return (
    <div className={styles.register}>
      <Skeleton>
        <form>
          <label>name</label>
          <input
            type="text"
            placeholder="john doe"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <label>email</label>
          <input
            type="email"
            placeholder="johndoe@email.com"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <label>phone number</label>
          <input
            type="number"
            placeholder="+254712345678"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <label>image url</label>
          <input
            type="url"

            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <label>password</label>
          <input
            type="password"
            placeholder="pass1234"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <label>confirm password</label>
          <input
            type="password"
            placeholder="pass12345678"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />

          <button>create</button>
        </form>
        <h4>
          Already a member?{" "}
          {
            <Link href="/auth/login">
              <span>Login</span>
            </Link>
          }
        </h4>
      </Skeleton>
    </div>
  );
}

export default Register;
