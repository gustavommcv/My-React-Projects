import { useContext, useState, useEffect } from 'react';
import './ModalForm.scss';
import mealsContext from '../../data/meals-context';

export default function ModalForm({ ref }) {
    const { closeModalForm, getTotalValue, submitOrder } = useContext(mealsContext);
    const [submitted, setSubmitted] = useState(false);

    function handleAction(formData) {
        const name = formData.get('name');
        const email = formData.get('email');
        const street = formData.get('street');
        const postalCode = formData.get('postal');
        const city = formData.get('city');

        submitOrder({ name, email, street, postalCode, city });
        setSubmitted(true);
    }

    useEffect(() => {
        function handleEsc(event) {
            if (event.key === 'Escape') {
                closeModalForm();
                setSubmitted(false);
            }
        }
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [closeModalForm]);

    return (
        <dialog ref={ref} className="modal-form">
            {submitted ? (
                <>
                    <h2 className="modal-form__title">Success!</h2>
                    <p className="modal-form__description">Your order was submitted successfully.</p>
                    <p className="modal-form__description">
                        We will get back to you with more details via email within the next few minutes.
                    </p>
                    <button type="button" onClick={() => {
                        closeModalForm();
                        setSubmitted(false);
                    }}>Close</button>
                </>
            ) : (
                <>
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
                            <button type="button" onClick={() => {
                                closeModalForm();
                                setSubmitted(false);
                            }}>Close</button>
                            <button type="submit">Submit Order</button>
                        </div>
                    </form>
                </>
            )}
        </dialog>
    );
}
