'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals.js";

export async function createMeal(formData) {
    const mealData = Object.fromEntries(formData);

    await saveMeal(mealData);
    redirect('/meals');
}