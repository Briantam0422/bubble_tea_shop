import { Alert, Button, Divider, Grid } from "@mui/material";
import { BubbleTeaItem } from "../bubble-tea/BubbleTeaItem";
import { useAppSelector, useAppStore } from "@/store/hooks";
import {
  calculateTotalPrice,
  deleteOrder,
  iShoppingCartOrder,
} from "@/store/shopping-cart/ShoppingCartSlice";
import ShoppingCartOrderInfo from "./ShoppingCartOrderInfo";

export default function ShoppingCartOrderList() {
  const store = useAppStore();
  const shoppingCart = useAppSelector((state) => state.shoppingCart);
  const onClickDelete = (order: iShoppingCartOrder) => {
    store.dispatch(deleteOrder(order));
    store.dispatch(calculateTotalPrice());
  };
  return (
    <>
      {shoppingCart && shoppingCart.orders.length > 0 ? (
        <>
          <Grid container spacing={5} rowSpacing={5} className="mb-10">
            {shoppingCart.orders.map((order: iShoppingCartOrder) => {
              return (
                <Grid key={order.id} item xs={12}>
                  <BubbleTeaItem
                    item={order.bubbleTea}
                    showBtnAddCart={false}
                  />
                  <Grid container justifyContent="end">
                    <Button
                      color="error"
                      onClick={() => {
                        onClickDelete(order);
                      }}>
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
          <ShoppingCartOrderInfo />
        </>
      ) : (
        <div className="p-10">
          <Alert className="w-full" variant="outlined" severity="info">
            You do not have a order. Please select your favorite bubble tea
            first :)
          </Alert>
        </div>
      )}
    </>
  );
}
