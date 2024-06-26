import { iBubbleTea } from "@/model/BubbleTea";
import { useAppStore } from "@/store/hooks";
import {
  addOrder,
  calculateTotalPrice,
} from "@/store/shopping-cart/ShoppingCartSlice";
import { Avatar, Button, Grid } from "@mui/material";
import { createNewOrderObject } from "../../store/shopping-cart/ShoppingCartSlice";
import { toast } from "react-toastify";

type BubbleTeaItemInfoProps = {
  item: iBubbleTea;
  showBtnAddCart: boolean;
};

export default function BubbleTeaItemInfo({
  item,
  showBtnAddCart,
}: BubbleTeaItemInfoProps) {
  const store = useAppStore();
  const onClickAddToCart = async () => {
    const newOrder = createNewOrderObject(item);
    store.dispatch(addOrder(newOrder));
    store.dispatch(calculateTotalPrice());
    toast.success("Nice Choice ! We have added it to your cart");
  };
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
          {showBtnAddCart && (
            <Grid item xs={12}>
              <Button
                variant="text"
                style={{ padding: 0 }}
                color="warning"
                onClick={onClickAddToCart}>
                Add To Cart
              </Button>
            </Grid>
          )}
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
