// storage.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slicers/auth"; // Make sure the path is correct for your authSlice
import orderReducer from "../slicers/order"; // Make sure the path is correct for your authSlice

const store = configureStore({
  reducer: {
    order: orderReducer,
    auth: authReducer, // Add more reducers here if needed
  },
});

export default store;
