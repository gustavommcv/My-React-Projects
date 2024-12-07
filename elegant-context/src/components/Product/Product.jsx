/* eslint-disable react/prop-types */
import './Product.scss';
import Button from '../Button/Button';

import { useContext } from 'react';
import CartContext from '../../context/cart-context';

function Product({ children, image, description, price, id }) {

    const { addItemToCart } = useContext(CartContext);

    return (
        <div className='product'>
            <img className='product__image' src={image} alt={children} />
            <h3 className="product__title">{children}</h3>
            <p className="product__price">${price}</p>
            <p className="product__description">{description}</p>

            <Button onClick={() => addItemToCart(id)} classN="product__button">Add to Cart</Button>
        </div>
    )
}

export default Product;
