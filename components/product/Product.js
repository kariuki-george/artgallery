import React from "react";
import CartButton from "./CartButton";
import styles from "./Product.module.scss";

function Product({ pid }) {
  return (
    <div className={styles.product}>
      <div className={styles.product_container}>
        <img src="https://images.unsplash.com/photo-1644424360940-01210d718201?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        <div>
          <span>
            <h1>name</h1>
            {pid}
          </span>
          <span>
            <h1>category</h1>category
          </span>
          <span>
            <h1>description</h1>Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into eh
            desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsu
          </span>
        </div>
      </div>

      <CartButton />
    </div>
  );
}

export default Product;
