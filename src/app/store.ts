"use client";

import { configureStore } from "@reduxjs/toolkit";
import ratingReducer from "../features/rating/ratingSlice";
import { apiSlice } from "../features/dogs/dogs-api-Slice";

export const store = configureStore({
  reducer: {
    rating: ratingReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware  );
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
