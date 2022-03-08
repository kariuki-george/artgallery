import React from "react";
import styles from "./PaymentFlow.module.scss";
import Cart from "./Cart";
import Payment from "./Payment";
import Processing from "./Processing";

function PaymentFlow() {
  return (
    <div className={styles.paymentflow}>
      <Cart />
      <Payment  />
      <Processing />
    </div>
  );
}

export default PaymentFlow;
