import React from "react";
import Sidebar from "../../components/auth/Sidebar";
import styles from "../../styles/Pages.module.css";
import Login from "../../components/auth/Login";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { loginUser } from "../../state/slices/userSlice";
import { useDispatch } from "react-redux";

function login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogin = async (user) => {
    try {
      const { data } = await axios.post(
        "https://api.smiley-geek-codes.tech/api/auth/login",
        user
      );

      if (data == "fail") {
        return toast.error("An error occurred");
      }
      localStorage.setItem("user", JSON.stringify(data));
      //CORRECT
      if (router.query.redirect) {
        dispatch(loginUser(data));
        return router.replace(router.query.location);
      }

      //TODO update according to data returned.

      dispatch(loginUser(data));
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
