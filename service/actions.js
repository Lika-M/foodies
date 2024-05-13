'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals.js";
import { revalidatePath } from "next/cache.js";

function isInvalidInput(text) {
    return !text || text.trim === '';
}

export async function createMeal(prevState, formData) {
    const mealData = Object.fromEntries(formData);

    for (const [key, value] of Object.entries(mealData)) {
        if (isInvalidInput(value)) {
            return {
                message: `Invalid input for ${key}!`
            };
        }

        if (key === 'image' && value.size === 0) {
            return {
                message: `Image file cannot be empty!`
            };
        }
    }

    await saveMeal(mealData);
    revalidatePath('/meals');
    redirect('/meals');
}
