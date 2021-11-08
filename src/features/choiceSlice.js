import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const choiceSlice = createSlice({
  name: "choice",
  initialState,
  reducers: {
    addChoice: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addChoice } = choiceSlice.actions;

export default choiceSlice.reducer;
