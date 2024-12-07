import './Header.scss';
import { useContext } from 'react';
import CartContext from '../../context/cart-context';

function Header() {
    const { showCart, items } = useContext(CartContext);

    console.log(items);

    return (
        <header className='header'>
            <div className="header__container">
                <img className='header__logo' src="/logo.png" alt="" />
                <h1 className='header__title'>Elegant Context</h1>
            </div>

            <button onClick={showCart} className='header__button'>Cart ({items.length})</button>
        </header>
    );
}

export default Header;
