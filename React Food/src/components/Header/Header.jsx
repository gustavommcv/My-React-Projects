import './Header.scss';
import logo from '../../assets/logo.jpg';
import { useContext } from 'react';
import mealsContext from '../../data/meals-context';

export default function Header() {
    const { openModal, getTotalItems } = useContext(mealsContext);

    const totalItems = getTotalItems() > 0 ? getTotalItems() : 0;

    return (
        <header className='header'>
            <div className='header__left-container'>
                <img src={logo} alt="Logo" className="header__logo" />
                <h1 className="header__title">ReactFood</h1>
            </div>

            <button className="header__cart" onClick={openModal}>
                Cart ({totalItems})
            </button>
        </header>
    );
}
