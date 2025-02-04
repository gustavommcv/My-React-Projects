import { createContext } from "react";

const mealsContext = createContext({
    meals: [],
    cart: [],
    openModal: () => {},
    closeModal: () => {},
    addToCart: () => {},
    getTotalItems: () => {},
    getTotalValue: () => {},
    removeFromCart: () => {},
    openModalForm: () => {},
    closeModalForm: () => {},
    submitOrder: () => {}
});

export default mealsContext;
