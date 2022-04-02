import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MiniSkeleton from "./MiniSkeleton";
import styles from "./Processing.module.scss";
import { clearCheckoutState } from "../../state/slices/checkoutFlow";

function Processing() {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(clearCheckoutState());
    };
  }, []);
  return (
    <MiniSkeleton heading="Processing">
      <span className={styles.processing}>Thanks for you purchase. </span>
    </MiniSkeleton>
  );
}

export default Processing;
