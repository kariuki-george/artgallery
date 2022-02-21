import React from "react";
import ProductOfTheDay from "./ProductOfTheDay";
import Art from "./Art";
import styles from "./Products.module.scss";
import Search from "./Search";

function Products() {
  return (
    <div className={styles.products}>
      <Search />
      <ProductOfTheDay />
      <Art />
    </div>
  );
}

export default Products;
