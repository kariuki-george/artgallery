import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  isLoggedIn: false,
  user: "buyer",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginUser: (state, { payload }) => {
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

export const { loginUser, switchUser, logout } = userSlice.actions;
const user = userSlice.reducer;
export default user;
