'use strict';
const Database = use('Database');
/*
|--------------------------------------------------------------------------
| ProductTagSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

class ProductTagSeeder {
	async run() {
		try {
			const addingTag = await Database.raw(`
        INSERT INTO freshgear.product_tag (product_id, tag_id) 
        Values(1,2)
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const addingTag = await Database.raw(`
        INSERT INTO freshgear.product_tag (product_id, tag_id) 
        Values(1,5)
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const addingTag = await Database.raw(`
        INSERT INTO freshgear.product_tag (product_id, tag_id) 
        Values(2,6)
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const addingTag = await Database.raw(`
        INSERT INTO freshgear.product_tag (product_id, tag_id) 
        Values(2,4)
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const addingTag = await Database.raw(`
        INSERT INTO freshgear.product_tag (product_id, tag_id) 
        Values(2,5)
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const addingTag = await Database.raw(`
        INSERT INTO freshgear.product_tag (product_id, tag_id) 
        Values(3,3)
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const addingTag = await Database.raw(`
        INSERT INTO freshgear.product_tag (product_id, tag_id) 
        Values(3,1)
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const addingTag = await Database.raw(`
        INSERT INTO freshgear.product_tag (product_id, tag_id) 
        Values(4,3)
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const addingTag = await Database.raw(`
        INSERT INTO freshgear.product_tag (product_id, tag_id) 
        Values(4,2)
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const addingTag = await Database.raw(`
        INSERT INTO freshgear.product_tag (product_id, tag_id) 
        Values(4,5)
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const addingTag = await Database.raw(`
        INSERT INTO freshgear.product_tag (product_id, tag_id) 
        Values(5,1)
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const addingTag = await Database.raw(`
        INSERT INTO freshgear.product_tag (product_id, tag_id) 
        Values(6,5)
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const addingTag = await Database.raw(`
        INSERT INTO freshgear.product_tag (product_id, tag_id) 
        Values(6,3)
      `);
		} catch (error) {
			console.log(error);
		}
		console.log('Added Tags and Products to product_tag Table');
	}
}

module.exports = ProductTagSeeder;
