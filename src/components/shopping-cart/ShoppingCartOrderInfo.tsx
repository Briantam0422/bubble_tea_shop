import { useAppSelector } from "@/store/hooks";
import { Divider, Grid, Button } from "@mui/material";
import { toast } from "react-toastify";

export default function ShoppingCartOrderInfo() {
  const shoppingCart = useAppSelector((state) => state.shoppingCart);
  const onClickCheckout = () => {
    toast.success("Checkout success!");
  };
  return (
    <>
      <Divider>Order Information</Divider>
      {shoppingCart && shoppingCart.orders.length > 0 && (
        <div className="mt-5">
          <Grid container rowSpacing={2}>
            <Grid item xs={12}>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center">
                <p className="text-gray-500">Number of Orders</p>
                <p>{shoppingCart.orders.length}</p>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center">
                <p className="text-gray-500">Total Amount</p>
                <p className="text-xl font-bold">${shoppingCart.totalPrice}</p>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button
                className="w-full"
                variant="contained"
                color="warning"
                onClick={onClickCheckout}>
                Checkout
              </Button>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
}
