'use strict';
const Database = use('Database');
/*
|--------------------------------------------------------------------------
| BrandSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

class BrandSeeder {
	async run() {
		try {
			const brand1 = await Database.raw(`
        INSERT INTO freshgear.brands (title) 
        Values("Nike")
      `);
			console.log(`added Nike to Brands Table`);
		} catch (error) {
			console.log(error);
		}
		try {
			const brand2 = await Database.raw(`
        INSERT INTO freshgear.brands (title) 
        Values("Adidas")
      `);
			console.log(`added Adidas to Brands Table`);
		} catch (error) {
			console.log(error);
		}
		try {
			const brand3 = await Database.raw(`
        INSERT INTO freshgear.brands (title) 
        Values("Converse")
      `);
			console.log(`added Converse to Brands Table`);
		} catch (error) {
			console.log(error);
		}
		try {
			const brand4 = await Database.raw(`
        INSERT INTO freshgear.brands (title) 
        Values("Reebok")
      `);
			console.log(`added Reebok to Brands Table`);
		} catch (error) {
			console.log(error);
		}
		try {
			const brand5 = await Database.raw(`
        INSERT INTO freshgear.brands (title) 
        Values("Jordan")
      `);
			console.log(`added Jordan to Brands Table`);
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = BrandSeeder;
