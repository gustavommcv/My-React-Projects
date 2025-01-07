import { useContext } from 'react';
import './Meal.scss';
import mealsContext from '../../data/meals-context';

export default function Meal({ logo, title, description, price, id }) {

    const { addToCart } = useContext(mealsContext);

    return (
        <div className="meal">
            <img src={logo} alt={title} className="meal__logo" />

            <h2 className="meal__title">{title}</h2>

            <div className="meal__price">
                <p>${price}</p>
            </div>

            <p className="meal__description">{description}</p>

            <button onClick={() => addToCart(id)} className="meal__button">Add to Cart</button>
        </div>
    );
}
