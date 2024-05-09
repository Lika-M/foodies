import Image from 'next/image.js';
import { notFound } from 'next/navigation.js';

import * as service from '@/service/meals.js'
import styles from './page.module.css';

export default async function MealDetails({ params }) {

    const meal = await service.getMealBySlug(params.mealSlug);
    
    if(!meal){
        notFound();
    }
    const instructions = meal.instructions.replace(/\n/g, '<br />');


    return (
        <>
            <header className={styles.header}>
                <div className={styles.image}>
                    <Image src={meal.image} alt={meal.title} fill />
                </div>
                <div className={styles.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={styles.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={styles.summary}>{meal.summary}</p>
                </div>

            </header>
            <main>
                <p
                    className={styles.instructions}
                    dangerouslySetInnerHTML={{ __html: instructions }}
                >
                </p>
            </main>
        </>
    );
}