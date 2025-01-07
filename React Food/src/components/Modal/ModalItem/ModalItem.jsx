import { useContext } from "react";
import mealsContext from "../../../data/meals-context";

export default function ModalItem({ name, quantity, price, id }) {

    const { addToCart, removeFromCart } = useContext(mealsContext);

    return (
        <li className="modal__item">
            <h2 className="modal__item-title">{name} - {quantity}x {price}</h2>

            <div className="modal__item-buttons">
                <button onClick={() => removeFromCart(id)}>-</button>
                <p>{quantity}</p>
                <button onClick={() => addToCart(id)}>+</button>
            </div>
        </li>
    );
}
