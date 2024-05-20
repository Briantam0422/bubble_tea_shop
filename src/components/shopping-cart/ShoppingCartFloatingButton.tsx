import { Badge, Fab } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import { useAppSelector } from "@/store/hooks";
import ShoppingCartDrawer from "./ShoppingCartDrawer";
import { toast } from "react-toastify";

export default function ShoppingCartFloatingButton() {
  const [openShoppingCart, setOpenShoppingCart] = useState<boolean>(false);
  const shoppingCart = useAppSelector((state) => state.shoppingCart);
  const onClickOpenShoppingCart = () => {
    setOpenShoppingCart(!openShoppingCart);
  };
  return (
    <div className="fixed bottom-10 right-10">
      <Badge
        badgeContent={shoppingCart && shoppingCart.orders.length}
        color="primary">
        <Fab
          variant="extended"
          color="warning"
          aria-label="shopping-cart"
          onClick={onClickOpenShoppingCart}>
          <ShoppingCartIcon />
          <p className="ml-2">Cart</p>
        </Fab>
      </Badge>
      <ShoppingCartDrawer
        openShoppingCart={openShoppingCart}
        onClickOpenShoppingCart={onClickOpenShoppingCart}
      />
    </div>
  );
}
