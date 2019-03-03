'use strict';
const Database = use('Database');
/*
|--------------------------------------------------------------------------
| TypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

class TypeSeeder {
	async run() {
		try {
			const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description) 
        Values("Lebron James", "fill description")
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description) 
        Values("Air Max 95", "fill description")
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description) 
        Values("Posite", "fill description")
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description) 
        Values("Yeezy", "fill description")
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description) 
        Values("Pharrell Williams", "fill description")
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description) 
        Values("Jeremy Scott", "fill description")
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description) 
        Values("One Star", "fill description")
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description) 
        Values("Jack Purcell", "fill description")
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description) 
        Values("Chuck 70", "fill description")
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description) 
        Values("Iverson Legacy", "fill description")
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description) 
        Values("Mobius", "fill description")
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description) 
        Values("Workout Plus ATI", "fill description")
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description) 
        Values("Jordan 1", "fill description")
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description) 
        Values("Jordan 3", "fill description")
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const lebrons = await Database.raw(`
        INSERT INTO freshgear.types (title, description) 
        Values("Jordan 11", "fill description")
      `);
		} catch (error) {
			console.log(error);
		}
		console.log('Added type to types database');
	}
}

module.exports = TypeSeeder;
