import React from "react";
import Sidebar from "../../components/auth/Sidebar";
import styles from "../../styles/Pages.module.css";
import Login from "../../components/auth/Login";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

function login() {
  const router = useRouter();
  const handleLogin = async (user) => {
    try {
      const response = await axios.post(
        "https://api.smiley-geek-codes.tech/api/auth/login",
        user
      );

      if (response.data == "fail") {
        return toast.error("An error occurred");
      }

      //CORRECT
      if (router.query.redirect) {
        return router.replace(router.query.location);
      }

      //TODO update according to data returned.
      router.replace("/");
    } catch (error) {
      toast.error("error occurred");
    }
  };
  return (
    <div className={styles.page}>
      <Sidebar />
      <Login handleLogin={handleLogin} />
    </div>
  );
}

export default login;
