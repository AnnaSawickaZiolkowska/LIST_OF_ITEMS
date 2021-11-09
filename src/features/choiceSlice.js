import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkedItems: localStorage.getItem("checkedItems")
    ? JSON.parse(localStorage.getItem("checkedItems"))
    : [],
};

export const choiceSlice = createSlice({
  name: "choice",
  initialState,
  reducers: {
    addChoice: (state, action) => {
      state.checkedItems.push({ id: action.payload });
    },
    removeChoice: (state, action) => {
      state.checkedItems.splice(
        state.checkedItems.findIndex(({ id }) => id === action.payload),
        1
      );
    },
  },
});

export const { addChoice, removeChoice } = choiceSlice.actions;

export default choiceSlice.reducer;
