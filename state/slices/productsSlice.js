import { createSlice } from "@reduxjs/toolkit";
// let userData = JSON.parse(localStorage.getItem("user"));
// let cart = JSON.parse(localStorage.getItem("cart"));

const userData = false;

const initialState = {
  productOfTheDay: {},
  products: [{}],
};

export const productsSlice = createSlice({
  name: "product",
  initialState: initialState,
});

//export const {} = productsSlice.actions;
const product = productsSlice.reducer;
export default product;
