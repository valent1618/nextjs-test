import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define a type for the slice state
interface CounterState {
  value: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
};

const { actions, reducer } = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value--;
    },
    add: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Actions
export const { increment, decrement, add } = actions;

// Selector
export const selectValue = (state: RootState) => state.counter.value;

export default reducer;
