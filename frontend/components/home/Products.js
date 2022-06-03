import React from "react";
import ProductOfTheDay from "./ProductOfTheDay";
import Art from "./Art";
import styles from "./Products.module.scss";
import Search from "./Search";

function Products({ products, isFetching }) {
  return (
    <div className={styles.products}>
      <Search />
      {/* <ProductOfTheDay /> */}
      {!isFetching && <Art products={products} />}
      {isFetching && "loading"}
    </div>
  );
}

export default Products;
