import { createSlice } from "@reduxjs/toolkit";
// let userData = JSON.parse(localStorage.getItem("user"));
// let cart = JSON.parse(localStorage.getItem("cart"));

const userData = false;

const initialState = userData
  ? { isLoggedIn: true, user: userData }
  : {
      isLoggedIn: false,
      user: "buyer",
    };

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    signIn: (state, user) => {
      state.user = user;
    },
    switchUser: (state, { payload }) => {
      
      state.user = payload;
    },
  },
});

export const { signIn, switchUser } = userSlice.actions;
const user = userSlice.reducer;
export default user;
