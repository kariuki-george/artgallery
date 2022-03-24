import React from "react";
import Sidebar from "../../components/auth/Sidebar";
import Register from "../../components/auth/Register";
import styles from "../../styles/Pages.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { login } from "../../state/slices/userSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

function register() {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSubmit = async (user) => {
    try {
      const response = await axios.post(
        "https://api.smiley-geek-codes.tech/api/auth/register",
        user
      );

      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch(login(response.data));
      toast.success("Account created successfully");

      if (router.query.redirect) {
        return router.replace(router.query.location);
      }
      return router.replace("/");
    } catch (error) {
      toast.error("Sorry an error occurred.");
    }
  };

  return (
    <div className={styles.page}>
      <Sidebar />
      <Register handleRegister={handleSubmit} />
    </div>
  );
}

export default register;
