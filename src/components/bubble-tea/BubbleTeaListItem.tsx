import { iBubbleTea } from "@/model/BubbleTea";
import { Card, CardActions, CardContent, CardMedia, Grid } from "@mui/material";
import BubbleTeaCardImage from "./BubbleTeaCardImage";

type BubbleTeaProps = {
  item: iBubbleTea;
};

export function BubbleTeaListItem({ item }: BubbleTeaProps) {
  return (
    <Card>
      <BubbleTeaCardImage
        path={item && item.assetPath ? item.assetPath : "no-image.png"}
      />
      <CardContent>
        <Grid container rowSpacing={1}>
          <Grid item xs={12}>
            <h1 className="text-xl font-bold">{item.name}</h1>
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
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
