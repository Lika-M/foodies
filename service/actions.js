'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals.js";

export async function createMeal(formData) {
    const mealData = Object.fromEntries(formData);
    console.log(mealData);

    await saveMeal(mealData);
    redirect('/meals');
}