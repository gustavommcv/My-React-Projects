import { useContext } from 'react';
import './Modal.scss';
import mealsContext from '../../data/meals-context';
import ModalItem from './ModalItem/ModalItem';

export default function Modal({ ref }) {

    const { closeModal, cart, getTotalValue, openModalForm } = useContext(mealsContext); 

    const totalValue = getTotalValue() > 0 ? getTotalValue() : 0;

    return (
        <dialog ref={ref} className='modal'>
            <h1 className='modal__title'>Your Cart</h1>

            <ul className="modal__items">
                {cart.map(item => {
                    return <ModalItem key={item.meal.id} name={item.meal.name} price={item.meal.price} quantity={item.quantity} id={item.meal.id} />
                })}
            </ul>

            <p className="modal__total-price">${totalValue.toFixed(2)}</p>

            <div className="modal__buttons">
                <button onClick={closeModal} className="modal__button">Close</button>
                {totalValue > 0 && <button onClick={openModalForm} className="modal__button modal__button--yellow">Go to Checkout</button>}
            </div>
        </dialog>
    );
}
