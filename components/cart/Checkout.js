import React, { useEffect } from "react";
import styles from "./Checkout.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { nextStage, prevStage } from "../../state/slices/checkoutFlow";

function Checkout() {
  const { stage, checkoutList } = useSelector((state) => state.checkout);
  const [total, setTotal] = React.useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    const sum = checkoutList.reduce((prev, item) => prev + item.price, 0);
    setTotal(sum);
  }, [checkoutList]);

  const handleCheckout = () => {
    dispatch(nextStage(total));
  };
  const handleBack = ()=>{
    dispatch(prevStage());
  }

  return (
    <div className={styles.checkout}>
      <div className={styles.checkout_flow}>
        {[1, 2, 3, 4].map((number) => (
          <span
            key={number}
            style={
              stage == number
                ? { color: "black" }
                : {
                    color: "gray",
                    fontSize: "smaller",
                    display: "flex",
                    alignItems: "center",
                  }
            }
          >
            {number}
          </span>
        ))}
      </div>
      <div>your orders</div>
      <div className={styles.checkout_list}>
        {checkoutList.length === 0 && <span>click buy to checkout</span>}
        {console.log("render")}
        {checkoutList.map((item) => (
          <li key={item.id}>
            
            <img src={item.imageurl} alt="art image" />

            <span>shs: {item.price}</span>
          </li>
        ))}
      </div>
      <div className={styles.checkout_checkout}>
        <span>Total: {total}</span>
        
        {stage < 4 && <button onClick={handleCheckout}>checkout</button>}
       { stage == 3 && <button onClick={handleBack}>go back</button>}
      </div>
    </div>
  );
}

export default Checkout;
