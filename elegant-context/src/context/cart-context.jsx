import { createContext } from "react";

// Auto-complete purposes
const CartContext = createContext({
    items:  [],
    showCart: () => {},
    closeCart:() => {},
    addItemToCart: () => {},
});

export default CartContext;
