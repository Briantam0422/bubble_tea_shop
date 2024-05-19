import { Button, Divider, Grid } from "@mui/material";
import { BubbleTeaItem } from "../bubble-tea/BubbleTeaItem";
import { useAppSelector } from "@/store/hooks";
import { iShoppingCartOrder } from "@/store/shopping-cart/ShoppingCartSlice";
import ShoppingCartOrderInfo from "./ShoppingCartOrderInfo";

export default function ShoppingCartOrderList() {
  const shoppingCart = useAppSelector((state) => state.shoppingCart);
  return (
    <>
      <Grid container spacing={5} rowSpacing={5} className="mb-10">
        {shoppingCart &&
          shoppingCart.orders.map((order: iShoppingCartOrder) => {
            return (
              <Grid key={order.id} item xs={12}>
                <BubbleTeaItem item={order.bubbleTea} showBtnAddCart={false} />
              </Grid>
            );
          })}
      </Grid>
      <ShoppingCartOrderInfo />
    </>
  );
}
