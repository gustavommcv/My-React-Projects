/* eslint-disable react/prop-types */
import { useReducer, useRef } from "react";
import CartContext from "./cart-context";
import Modal from "../components/Modal/Modal";
import products from "../products";

function reducerFunction(state, action) {
    if (action.type === 'add') {
        return {
            items: [...state.items, action.payload]
        };
    }

    if (action.type === 'updateQuantity') {
        const updatedItems = state.items.map(item => {
            if (item.id === action.payload.id) {
                return { ...item, quantity: action.payload.quantity };
            }
            return item;
        }).filter(item => item.quantity > 0); // Remove itens com quantidade 0
        return { items: updatedItems };
    }

    return state;
}

export default function CartContextProvider({ children }) {
    const [cartState, cartDispatch] = useReducer(reducerFunction, { items: [] });
    
    const modal = useRef();

    function closeCart() {
        modal.current.close();
    }

    function showCart() {
        modal.current.showModal();
    }

    function handleAddItemToCart(id) {
        const existingItem = cartState.items.find(item => item.id === id);
        if (existingItem) {
            handleUpdateItemQuantity(id, existingItem.quantity + 1);
        } else {
            cartDispatch({
                type: 'add',
                payload: { ...products.find(product => product.id === id), quantity: 1 }
            });
        }
    }

    function handleUpdateItemQuantity(id, quantity) {
        cartDispatch({
            type: 'updateQuantity',
            payload: { id, quantity }
        });
    }

    const ctxValue = {
        items: cartState.items,
        closeCart: closeCart,
        showCart: showCart,
        addItemToCart: handleAddItemToCart,
        updateItemQuantity: handleUpdateItemQuantity, // Passa a função para o contexto
    };

    return (
        <CartContext.Provider value={ctxValue}>
            <Modal ref={modal}></Modal>
            {children}
        </CartContext.Provider>
    );
}
