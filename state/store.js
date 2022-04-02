import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/userSlice";
import productsReducer from "./slices/productsSlice";
import checkoutFlowReducer from "./slices/checkoutFlow";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
    checkout: checkoutFlowReducer,
    cart: cartSlice,
  },
});

export default store;
