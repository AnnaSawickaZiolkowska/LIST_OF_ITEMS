import { configureStore } from "@reduxjs/toolkit";
import choiceReducer from "../features/choiceSlice";

export const store = configureStore({
  reducer: {
    choice: choiceReducer,
  },
});
