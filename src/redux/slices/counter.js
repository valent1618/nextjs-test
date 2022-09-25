import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value--;
    },
    add: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Actions
export const { increment, decrement, add } = actions;

// Selector
export const selectValue = (state) => state.counter.value;

export default reducer;
