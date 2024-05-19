
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iBubbleTea } from '../../model/BubbleTea';

export interface iBubbleTeaGroupByLabels {
  bubbleTeaGroupByLabels: Partial<Record<string, iBubbleTea[]>>,
  bubbleTeaLabels: Record<string, string>
}

const initialState: iBubbleTeaGroupByLabels = {
  bubbleTeaGroupByLabels: {},
  bubbleTeaLabels: {}
};

export const bubbleTeaSlice = createSlice({
  name: "bubbleTea",
  initialState,
  reducers: {
    setBubbleTeaGroupByLabels: (state, action: PayloadAction<Partial<Record<string, iBubbleTea[]>>>) => {
      state.bubbleTeaGroupByLabels = action.payload
    },
    setBubbleTeaLabels: (state, action: PayloadAction<Record<string,string>>) => {
      state.bubbleTeaLabels = action.payload
    }
  },
});

export const { setBubbleTeaGroupByLabels, setBubbleTeaLabels } = bubbleTeaSlice.actions;
export const bubbleTeaReducer = bubbleTeaSlice.reducer;