/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { createPortal } from "react-dom";

import { useContext } from "react";
import CartContext from "../../context/cart-context";

import './Modal.scss';

const Modal = forwardRef((_props, ref) => {
    const { closeCart, items, updateItemQuantity } = useContext(CartContext);

    const cartTotal = items
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2);

    return createPortal(
        <dialog ref={ref} className="modal">
            <div className="modal__header">
                <h1 className="modal__title">Your Cart</h1>
            </div>
            <div className="modal__content">
                {items.length > 0 ? (
                    <ul className="modal__list">
                        {items.map(item => (
                            <li key={item.id} className="modal__item">
                                <div className="modal__item-info">
                                    <span className="modal__item-title">
                                        {item.title} (${item.price.toFixed(2)})
                                    </span>
                                    <div className="modal__item-controls">
                                        <button
                                            className="modal__button modal__button--quantity"
                                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                        >
                                            -
                                        </button>
                                        <span className="modal__item-quantity">{item.quantity}</span>
                                        <button
                                            className="modal__button modal__button--quantity"
                                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="modal__empty-message">No items in cart!</p>
                )}
            </div>
            <div className="modal__footer">
                <p className="modal__total">
                    Cart Total: <span>${cartTotal}</span>
                </p>
                <button
                    onClick={closeCart}
                    className="modal__button modal__button--close"
                >
                    Close
                </button>
                {items.length > 0 && (
                    <button className="modal__button modal__button--checkout">
                        Checkout
                    </button>
                )}
            </div>
        </dialog>,
        document.querySelector("#modal")
    );
});

export default Modal;
