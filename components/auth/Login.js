import React, { useState } from "react";
import Link from "next/link";
import Skeleton from "./Skeleton";
import styles from "./Register.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../state/slices/userSlice";
import { useRouter } from "next/router";
import Toast from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  const router = useRouter();

  //todo ...login then populate redux with the right data.

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = {
      name: "Gabriella Ngene",
      email,

      role: user.user,
    };

    dispatch(login(res));
    Toast.success("successfully logged in");
    router.replace("/");
  };

  return (
    <div className={styles.register}>
      <Skeleton authState={"login"}>
        <form onSubmit={handleLogin}>
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

          <button onClick={handleLogin}>login</button>
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
