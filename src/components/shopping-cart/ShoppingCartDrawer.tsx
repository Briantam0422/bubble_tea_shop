import { Drawer, Grid, Button } from "@mui/material";
import ShoppingCartOrderList from "./ShoppingCartOrderList";

type ShoppingCartDrawerProps = {
  openShoppingCart: boolean;
  onClickOpenShoppingCart: () => void;
};

export default function ShoppingCartDrawer({
  openShoppingCart,
  onClickOpenShoppingCart,
}: ShoppingCartDrawerProps) {
  return (
    <Drawer
      anchor="right"
      open={openShoppingCart}
      onClose={onClickOpenShoppingCart}>
      <div className="w-full sm:max-w-[600px] pt-10 pb-20 px-10">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          className="mb-2">
          <p className="text-gray-500">Your Orders</p>
          <Button color="info" onClick={onClickOpenShoppingCart}>
            Back
          </Button>
        </Grid>
        <ShoppingCartOrderList />
      </div>
    </Drawer>
  );
}
