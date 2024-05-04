import MealItem from './meal-item.js';
import styles from './meals-grid.module.css';

export default function MealsGrid({ meals }) {

    return (
        <ul>
            {meals.map(meal => (
                <li key={meal.id}>
                    <MealItem {...meal}/>
                </li>
            ))}
        </ul>
    );
}