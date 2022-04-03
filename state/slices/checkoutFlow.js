import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    stage: 1,
    checkoutList: [],
    total: 0,
  },
  reducers: {
    addToCheckout: (state, { payload }) => {
      state.stage = 2;
      
      state.checkoutList.push(payload);
    },
    nextStage: (state, { payload }) => {
      state.stage = state.stage += 1;

      if (payload) state.total = payload;
    },
    prevStage: (state) => {
      state.stage = state.stage - 1;
    },
    clearCheckoutState: (state) => {
      state.stage = 1;
      state.total = 0;
      state.checkoutList = [];
    },
  },
});

export const { addToCheckout, nextStage, prevStage, clearCheckoutState } =
  checkoutSlice.actions;

export default checkoutSlice.reducer;
