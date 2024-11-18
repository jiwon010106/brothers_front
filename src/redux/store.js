import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices/submenuSlice";

const store = configureStore({
  reducer: rootReducer,
  // DevTools 설정 추가 (선택적)
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
