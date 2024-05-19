import { Grid } from "@mui/material";
import { iBubbleTea } from "@/model/BubbleTea";
import { BubbleTeaItem } from "./BubbleTeaItem";

type BubbleTeaListGroupProps = {
  items: iBubbleTea[];
  label: string;
};

export default function BubbleTeaListGroup({
  items,
  label,
}: BubbleTeaListGroupProps) {
  return (
    <>
      <h1 className="text-gray-500 text-xl mb-5">{label}</h1>
      <Grid container spacing={5} rowSpacing={5}>
        {items &&
          items.length > 0 &&
          items.map((item) => {
            return (
              <Grid item key={item.id} xs={12} sm={12} md={6} lg={4} xl={3}>
                <BubbleTeaItem item={item} />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}
