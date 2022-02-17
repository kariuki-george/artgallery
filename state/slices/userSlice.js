import { createSlice } from "@reduxjs/toolkit";
// let userData = JSON.parse(localStorage.getItem("user"));
// let cart = JSON.parse(localStorage.getItem("cart"));

const userData = false;

const initialState = userData
  ? { isLoggedIn: true, userData }
  : {
      isLoggedIn: false,
    };

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
});

export const { clearState } = userSlice.actions;
const user = userSlice.reducer;
export default user;
