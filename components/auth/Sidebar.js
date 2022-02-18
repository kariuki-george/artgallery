import React from "react";
import styles from "./Sidebar.module.scss";
import { useDispatch } from "react-redux";
import { switchUser } from "../../state/slices/userSlice";

function Sidebar() {
  //ignore these functions for now...your scope ni kustyle tu
  const dispatch = useDispatch();
  const handleSwitch = (user) => {
    dispatch(switchUser(user));
  };
  return (
    <div className={styles.sidebar}>
      {/* <button onClick={clickMe}>Buyer</button>
      <button onClick={clickMe}>Designer</button>
      <button onClick={clickMe}>Admin</button> */}
      <button
        onClick={() => {
          handleSwitch("buyer");
        }}
        className={styles.sidebar_role}
      >
        Buyer
      </button>
      <button
        onClick={() => {
          handleSwitch("designer");
        }}
        className={styles.sidebar_role}
      >
        Designer
      </button>
      <button
        onClick={() => {
          handleSwitch("admin");
        }}
        className={styles.sidebar_role}
      >
        Admin
      </button>
    </div>
  );
}

export default Sidebar;
