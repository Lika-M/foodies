'use server';

export async function createMeal(formData) {
    const mealData = Object.fromEntries(formData);
    console.log(mealData);
}