import { createSlice } from "@reduxjs/toolkit";
// let userData = JSON.parse(localStorage.getItem("user"));
// let cart = JSON.parse(localStorage.getItem("cart"));

const userData = false;

const initialState = {
  isLoggedIn: false,
  user: "buyer",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, { payload }) => {
      state.isLoggedIn = true;
      state.user = { ...payload };
    },
    switchUser: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = "buyer";
    },
  },
});

export const { login, switchUser, logout } = userSlice.actions;
const user = userSlice.reducer;
export default user;
