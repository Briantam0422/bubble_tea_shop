import { Fab } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function ShoppingCartFloatingButton() {
  return (
    <div className="fixed bottom-10 right-10">
      <Fab variant="extended" color="warning" aria-label="shopping-cart">
        <ShoppingCartIcon />
        <p className="ml-2">Cart</p>
      </Fab>
    </div>
  );
}
