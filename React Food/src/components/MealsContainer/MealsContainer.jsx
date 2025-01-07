import { useContext } from 'react';
import './MealsContainer.scss';
import mealsContext from '../../data/meals-context';
import Meal from '../Meal/Meal';

const baseURLBackend = 'http://localhost:3000';

export default function MealsContainer() {
    const { meals } = useContext(mealsContext);
    const baseURLBackend = 'http://localhost:3000/';

    return (
        <div className="meals-container">
            {meals && meals.map((meal) => (
                <Meal 
                    key={meal.id} 
                    title={meal.name} 
                    description={meal.description} 
                    logo={`${baseURLBackend}${meal.image}`} 
                    price={meal.price} 
                    id={meal.id}
                />
            ))}
        </div>
    );
}
