import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getAllMeals() {
    // throw new Error('Failed to fetch data. Please try again later.');

    // delay fetching data
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return db.prepare('SELECT * FROM meals').all();
}

export async function getMealBySlug(slug) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}