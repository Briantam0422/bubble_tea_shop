import { iBubbleTea } from "@/model/BubbleTea";
import { Avatar, Button, Grid } from "@mui/material";

type BubbleTeaItemInfoProps = {
  item: iBubbleTea;
};

export default function BubbleTeaItemInfo({ item }: BubbleTeaItemInfoProps) {
  return (
    <Grid container rowSpacing={1}>
      <Grid item xs={8} sm={8} md={12}>
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
          <Grid item xs={12}>
            <Button variant="text" style={{ padding: 0 }} color="warning">
              Add To Cart
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} sm={4} className="block sm:hidden">
        <Grid container justifyContent="center" alignItems="center">
          <Avatar
            sx={{
              width: 100,
              height: 100,
            }}
            alt={"bubble-tea-" + item.id}
            src={`/images/bubble_tea/${
              item && item.assetPath ? item.assetPath : "no-image.png"
            }`}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
