import { iBubbleTea } from "@/model/BubbleTea";
import { Card, CardActions, CardContent, CardMedia, Grid } from "@mui/material";
import BubbleTeaCardImage from "./BubbleTeaCardImage";
import BubbleTeaItemInfo from "./BubbleTeaItemInfo";

type BubbleTeaProps = {
  item: iBubbleTea;
};

export function BubbleTeaItem({ item }: BubbleTeaProps) {
  return (
    <Card variant="outlined" className="hover:shadow-lg">
      <BubbleTeaCardImage
        path={item && item.assetPath ? item.assetPath : "no-image.png"}
      />
      <CardContent>
        <BubbleTeaItemInfo item={item} />
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
