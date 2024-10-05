import { createSlice } from "@reduxjs/toolkit";

const orderSlicer = createSlice({
  name: "order",
  initialState: { order:null},
  reducers: {
    checkoutOrder: (state, action) => {
      state.order=action.payload
    },
   
  },
});

export const { checkoutOrder } = orderSlicer.actions;
export default orderSlicer.reducer;
