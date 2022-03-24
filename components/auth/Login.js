import React, { useState } from "react";

import Skeleton from "./Skeleton";
import styles from "./Register.module.scss";

import { useRouter } from "next/router";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    handleLogin({
      email,
      password : parseInt(password),
    });
  };

  const handleRegister = () => {
    if (router.query.redirect) {
      const {  location } = router.query;
      return router.replace( `/auth/register?redirect=true&location=${location}`)
    }
   return router.replace("/auth/register")
  };

  return (
    <div className={styles.register}>
      <Skeleton authState={"login"}>
        <form onSubmit={handleSubmit}>
          <label>email</label>

          <input
            type="email"
            placeholder="johndoe@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>password</label>
          <input
            type="password"
            placeholder="passw123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleSubmit}>login</button>
        </form>
        <h4>
          Don't have an account? <span onClick={handleRegister}>Register</span>
        </h4>
      </Skeleton>
    </div>
  );
}

export default Login;
