import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  counter: number;
}

const initialState: CounterState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
