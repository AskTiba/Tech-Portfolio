"use client";

import { configureStore } from "@reduxjs/toolkit";
import ratingReducer from "../features/rating/ratingSlice";

export const store = configureStore({
  reducer: {
    rating: ratingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
