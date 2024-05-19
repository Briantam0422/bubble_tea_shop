import { iBubbleTea } from "@/model/BubbleTea";
import { Card, CardActions, CardContent, CardMedia, Grid } from "@mui/material";
import BubbleTeaCardImage from "./BubbleTeaCardImage";
import BubbleTeaItemInfo from "./BubbleTeaItemInfo";

type BubbleTeaProps = {
  item: iBubbleTea;
  showBtnAddCart: boolean;
};

export function BubbleTeaItem({ item, showBtnAddCart }: BubbleTeaProps) {
  return (
    <Card variant="outlined" className="hover:shadow-lg">
      <div className="hidden sm:block">
        <BubbleTeaCardImage
          path={item && item.assetPath ? item.assetPath : "no-image.png"}
        />
      </div>
      <CardContent>
        <BubbleTeaItemInfo item={item} showBtnAddCart={showBtnAddCart} />
      </CardContent>
    </Card>
  );
}
