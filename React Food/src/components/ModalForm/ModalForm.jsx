import { useContext } from 'react';
import './ModalForm.scss';
import mealsContext from '../../data/meals-context';

export default function ModalForm({ ref }) {

    const { closeModalForm, getTotalValue } = useContext(mealsContext);

    function handleAction(formData) {
        // TODO
        const name = formData.get('name');
    }

    return (
        <dialog ref={ref} className='modal-form'>
            <h2 className="modal-form__title">Checkout</h2>
            <p className="modal-form__amount">Total Amount: ${getTotalValue()}</p>

            <form action={handleAction} className="modal-form__form">
                <label htmlFor="name">Full Name</label>
                <input type="text" name="name" id="name" required />

                <label htmlFor="email">E-Mail Address</label>
                <input type="email" name="email" id="email" required />

                <label htmlFor="street">Street</label>
                <input type="text" name="street" id="street" required />

                <label htmlFor="postal">Postal Code</label>
                <input type="text" name="postal" id="postal" required />

                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" required />

                <div className="modal-form__actions">
                    <button type="button" onClick={closeModalForm}>Close</button>
                    <button type="submit">Submit Order</button>
                </div>
            </form>

        </dialog>
    );
}
