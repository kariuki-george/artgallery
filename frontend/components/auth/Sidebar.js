import React from "react";
import styles from "./Sidebar.module.scss";
import { useDispatch } from "react-redux";
import { switchUser } from "../../state/slices/userSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const handleSwitch = (user) => {
    dispatch(switchUser(user));
  };

  return (
    <div className={styles.sidebar}>
      <button
        onClick={() => {
          handleSwitch("buyer");
        }}
      >
        Buyer
      </button>
      <button
        onClick={() => {
          handleSwitch("designer");
        }}
      >
        Designer
      </button>
     
    </div>
  );
}

export default Sidebar;
