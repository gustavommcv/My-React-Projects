import { useCallback, useEffect, useRef, useState } from "react";
import mealsContext from "./meals-context";
import axios from "axios";
import Modal from "../components/Modal/Modal";
import ModalForm from "../components/ModalForm/ModalForm";

export default function MealContextProvider({ children }) {

    const modal = useRef();
    const modalForm = useRef();

    const [data, setData] = useState(null);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/meals');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        }

        fetchData();
    }, []);

    // console.log(data);

    function addToCart(id) {
        if (!data) return;
    
        const meal = data.find(meal => meal.id === id);
    
        if (!meal) {
            console.error(`Meal with id ${id} not found.`);
            return;
        }
    
        setCart(prevCart => {
            const exists = prevCart.some(item => item.meal.id === id);
    
            if (exists) {
                return prevCart.map(item =>
                    item.meal.id === id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
    
            return [...prevCart, { meal, quantity: 1 }];
        });
    }

    function removeFromCart(id) {
        setCart(prevCart => {
            return prevCart.reduce((acc, item) => {
                if (item.meal.id === id) {
                    if (item.quantity === 1) {
                        return acc;
                    }
                    return [...acc, { ...item, quantity: item.quantity - 1 }];
                }
                return [...acc, item];
            }, []);
        });
    }
    
    function getTotalValue() {
        return cart.reduce((total, item) => {
            return total + item.meal.price * item.quantity;
        }, 0);
    }    

    function getTotalItems() {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }
    
    function openModal() {
        modal.current.showModal();
    }

    function closeModal() {
        modal.current.close();
    }

    function openModalForm() {
        closeModal();
        modalForm.current.showModal();
    }

    function closeModalForm() {
        modalForm.current.close();
    }

    async function submitOrder(customer) {
        try {
            const response = await axios.post('http://localhost:3000/orders', {
                order: {
                    items: cart.map(item => ({
                        id: item.meal.id,
                        name: item.meal.name,
                        price: item.meal.price,
                        description: item.meal.description,
                        image: item.meal.image,
                        quantity: item.quantity
                    })),
                    customer: {
                        name: customer.name,
                        email: customer.email,
                        street: customer.street,
                        "postal-code": customer.postalCode,
                        city: customer.city
                    }
                }
            });
    
            console.log('Order submitted successfully:', response.data);
        } catch (error) {
            console.error('Error submitting order:', error);
        }
    }   

    const ctxValue = {
        meals: data,
        cart,
        openModal,
        closeModal,
        addToCart,
        getTotalItems,
        getTotalValue,
        removeFromCart,
        openModalForm,
        closeModalForm,
        submitOrder
    }

    return <mealsContext.Provider value={ctxValue}>
        <Modal ref={modal} />
        <ModalForm ref={modalForm} />
        {children}
    </mealsContext.Provider>
}
