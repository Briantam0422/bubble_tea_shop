import { Drawer, Fab } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import ShoppingCartOrderList from "./ShoppingCartOrderList";

export default function ShoppingCartFloatingButton() {
  const [openShoppingCart, setOpenShoppingCart] = useState<boolean>(false);

  const onClickOpenShoppingCart = () => {
    setOpenShoppingCart(!openShoppingCart);
  };
  return (
    <div className="fixed bottom-10 right-10">
      <Fab
        variant="extended"
        color="warning"
        aria-label="shopping-cart"
        onClick={onClickOpenShoppingCart}>
        <ShoppingCartIcon />
        <p className="ml-2">Cart</p>
      </Fab>
      <Drawer
        anchor="right"
        open={openShoppingCart}
        onClose={onClickOpenShoppingCart}>
        <div className="min-w-96 p-10">
          <p className="text-gray-500">Your Orders</p>
          <ShoppingCartOrderList />
        </div>
      </Drawer>
    </div>
  );
}
