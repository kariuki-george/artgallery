import React from "react";
import styles from "./PaymentFlow.module.scss";
import Cart from "./Cart";
import Payment from "./Payment";
import Processing from "./Processing";
import { useSelector } from "react-redux";

function PaymentFlow({ data }) {
  const { stage } = useSelector((state) => state.checkout);
  return (
    <div className={styles.paymentflow}>
      {stage <3 && <Cart data={data} />}
      {stage == 3 && <Payment />}
      {stage == 4 && <Processing />}
    </div>
  );
}

export default PaymentFlow;
