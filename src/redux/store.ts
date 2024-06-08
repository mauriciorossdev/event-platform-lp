import { configureStore } from "@reduxjs/toolkit";
import { eventSlice } from "./slices/event.slices";

export const store = configureStore({
  reducer: {
    eventReducer: eventSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
 