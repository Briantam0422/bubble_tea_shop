import { iBubbleTea } from "@/model/BubbleTea";
import { Grid } from "@mui/material";
import { BubbleTeaListItem } from "./BubbleTeaListItem";

type BubbleTeaListType = {
  data: Array<iBubbleTea>;
};

export default function BubbleTeaList({ data }: BubbleTeaListType) {
  return (
    <Grid container spacing={5} rowSpacing={5}>
      {data &&
        data.map((item: iBubbleTea) => {
          return (
            <Grid item key={item.id} xs={12} sm={12} md={6} lg={3}>
              <BubbleTeaListItem item={item} />
            </Grid>
          );
        })}
    </Grid>
  );
}
