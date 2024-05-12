import fs from 'node:fs';

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

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

export async function saveMeal(meal) {
    //preparing meal object
    meal.slug = slugify(meal.title, { lower: true, trim: true });
    meal.instructions = xss(meal.instructions);

    //storing image in the public folder =>
    //preparing image file
    const imgExtension = meal.image.name.split('.').pop();
    const imgFile = `${meal.slug}.${imgExtension}`;
    
    //preparing stream wit path
    const stream = fs.createWriteStream(`public/images/${imgFile}`);
    //buffering image 
    const bufferedImg = await meal.image.arrayBuffer();
    //write image to the public folder or handle error
    stream.write(Buffer.from(bufferedImg), (error) => {
        if (error) {
            throw new Error('Saving image failed.')
        }
    });

    //store meal object in the DB =>
    //saving image path instead the image
    meal.image = `/images/${imgFile}`;

    db.prepare(`
        INSERT INTO meals
        (slug, title, image, summary, instructions, creator, creator_email)
        VALUES
        (@slug, @title, @image, @summary, @instructions, @creator, @creator_email)
    `).run(meal);
}