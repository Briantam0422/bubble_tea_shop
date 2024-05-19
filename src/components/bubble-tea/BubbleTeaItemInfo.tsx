import { iBubbleTea } from "@/model/BubbleTea";
import { Grid } from "@mui/material";

type BubbleTeaItemInfoProps = {
  item: iBubbleTea;
};

export default function BubbleTeaItemInfo({ item }: BubbleTeaItemInfoProps) {
  return (
    <Grid container rowSpacing={1}>
      <Grid item xs={12}>
        <h1 className="text-xl font-medium">{item.name}</h1>
      </Grid>
      <Grid item xs={12}>
        <p className="text-xl text-gray-600">
          {item.currency}: {item.price.toFixed(1)}
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className="text-gray-500 text-sm">{item.description}</p>
      </Grid>
    </Grid>
  );
}
