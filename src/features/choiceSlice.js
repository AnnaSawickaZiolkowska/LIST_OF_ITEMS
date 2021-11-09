import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("checkedItems")
    ? JSON.parse(localStorage.getItem("checkedItems"))
    : [],
};

export const choiceSlice = createSlice({
  name: "choice",
  initialState,
  reducers: {
    addChoice: (state, action) => {
      state.value.push({ id: action.payload });
    },
    removeChoice: (state, action) => {
      state.value.splice(
        state.value.findIndex(({ id }) => id === action.payload),
        1
      );
    },
  },
});

export const { addChoice, removeChoice } = choiceSlice.actions;

export default choiceSlice.reducer;
