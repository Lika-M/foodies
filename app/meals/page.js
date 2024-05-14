import { Suspense } from 'react';
import Link from 'next/link';

import * as service from '@/service/meals.js';
import MealsGrid from '@/components/meals/meals-grid.js';
import styles from './page.module.css';

export const metadata = {
    title: 'All meals',
    description: 'Browse the delicious meals shared by our community',
};

async function FetchedMeals() {
    const meals = await service.getAllMeals();
    return <MealsGrid meals={meals} />;
}

export default function Meals() {

    return (
        <>
            <header className={styles.header}>
                <h1>Delicious meals, created{' '}
                    <span className={styles.highlight}>by you</span></h1>
                <p>Chose your favorite recipe and cook it yourself. It is easy and fun!</p>
                <p className={styles.cta}>
                    <Link href="/meals/share">
                        Share Your Favorite Recipe
                    </Link>
                </p>
            </header>
            <main className={styles.main}>
                <Suspense fallback={<p className={styles.loading}>Fetching data...</p>}>
                    <FetchedMeals />
                </Suspense>
            </main>
        </>
    );
}