import { configureStore } from "@reduxjs/toolkit";
import { officesSlice } from "./slices/office";


export const store = configureStore({
  reducer: {
    offices: officesSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})