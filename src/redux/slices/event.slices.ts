import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EventState {
   value: string;
}

const initialState: EventState = {
  value:""
};

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    eventClicked: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.value = action.payload;
    },
    showEventClicked: (state) => {
      console.log(state.value);
    },
  },
});

export const { eventClicked, showEventClicked } = eventSlice.actions;
