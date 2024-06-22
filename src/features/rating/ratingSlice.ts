"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const ratingSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    setRating: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRating } = ratingSlice.actions;

export default ratingSlice.reducer;
