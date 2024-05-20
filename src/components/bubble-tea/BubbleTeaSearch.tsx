import { useAppSelector, useAppStore } from "@/store/hooks";
import { Card, TextField } from "@mui/material";
import data from "@/api/data.json";
import { iBubbleTea } from "@/model/BubbleTea";
import { ChangeEvent } from "react";
import {
  bubbleTeaFilter,
  bubbleTeaGroupByLabelsAndSort,
} from "@/utils/bubbleTeaHelper";
import { setBubbleTeaGroupByLabels } from "@/store/bubble-tea/bubbleTeaListSlice";

export default function BubbleTeaSearch() {
  const store = useAppStore();
  const bubbleTeaState = useAppSelector((state) => state.bubbleTea);
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (bubbleTeaState) {
      const bubbleTeaList: iBubbleTea[] = data;
      const filteredBubbleTeaList = bubbleTeaFilter(bubbleTeaList, value);
      const result = bubbleTeaGroupByLabelsAndSort(filteredBubbleTeaList);
      store.dispatch(setBubbleTeaGroupByLabels(result));
    }
  };
  return (
    <div className="px-10 sticky top-5 right-0 z-10">
      <Card variant="outlined" className="bg-white p-5">
        <TextField
          label="Search Bubble Tea"
          className="w-full"
          onInput={onInputChange}
        />
      </Card>
    </div>
  );
}
