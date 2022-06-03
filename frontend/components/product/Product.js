import React from "react";
import CartButton from "./CartButton";
import styles from "./Product.module.scss";

function Product({  product }) {
  
  return (
    <div className={styles.product}>
      <div className={styles.product_container}>
        <img src={product.imageurl} alt={product.name} />
        <div>
          <span>
            <h1>name</h1>
            {product.name}
          </span>
          <span>
            <h1>category</h1>
            {product.category}
          </span>
          <span>
            <h1>description</h1>
            {product.description}
          </span>
        </div>
      </div>

      <CartButton product={product} price={product.price} designer_name={product.designer_name}/>
    </div>
  );
}

export default Product;
