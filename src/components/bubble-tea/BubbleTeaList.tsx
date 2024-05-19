import { iBubbleTea } from "@/model/BubbleTea";
import { Grid } from "@mui/material";
import BubbleTeaListGroup from "./BubbleTeaListGroup";

type BubbleTeaListType = {
  data: Partial<Record<string, iBubbleTea[]>>;
  labels: Record<string, string>;
};

export default function BubbleTeaList({ data, labels }: BubbleTeaListType) {
  return (
    <Grid container spacing={5} rowSpacing={5}>
      {data &&
        Object.keys(data).map(function (key: string) {
          if (data[key] != undefined) {
            const label: string = labels[key];
            const items: iBubbleTea[] = data[key];
            return (
              <Grid key={key} item xs={12}>
                <BubbleTeaListGroup items={items} label={label} />
              </Grid>
            );
          }
        })}
    </Grid>
  );
}
