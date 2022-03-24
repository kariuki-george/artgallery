import React, { useState } from "react";
import Link from "next/link";
import Skeleton from "./Skeleton";
import styles from "./Register.module.scss";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

function Register({handleRegister}) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const user = useSelector((state) => state.users.user);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (password != confirmPassword) {
      return toast.error("password and confirm-password should be identical");
    }
    handleRegister({
      name: userName,
      email,
      password,
      phonenumber,
      role: user,
    });
  };
  return (
    <div className={styles.register}>
      <Skeleton authState={"sign up"}>
        <form onSubmit={handleSubmit}>
          <label>Full names</label>
          <input
            type="text"
            placeholder="john doe"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label>email</label>
          <input
            type="email"
            placeholder="johndoe@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>phone number</label>
          <input
            type="number"
            placeholder="0712345678"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
          />
         
          <label>password</label>
          <input
            type="password"
            placeholder="12345678"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>confirm password</label>
          <input
            type="password"
            placeholder="12345678"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button onClick={handleSubmit}>create</button>
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
