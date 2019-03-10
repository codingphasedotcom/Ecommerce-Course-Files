'use strict';
const Database = use('Database');
/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

class ProductSeeder {
	async run() {
		try {
			const lebrons = await Database.raw(`
        INSERT INTO freshgear.products (sku, title, description, image_url, color, price, qty, material, brand_id, type_id, user_id) 
        Values("LBN3465WHITE", "Lebron 13", "In 2016, the Nike LeBron 13 performance basketball sneaker launched alongside other signature player styles in the “Easter” collection. The colorway rings true to the holiday with a white and silver base that is flanked with pastels and colorful egg-dye prints. Pastel tones hit the Swoosh, tongue branding, and liner of the Nike LeBron 13 for a vibrant look. Color continues on the speckled midsole, toe tip, and partially translucent outsole. So we don’t forget its place in the King James lineup, a colorful 13 is seen on the tongue.", "/img/products/nike-lebron-13-white.png", "white", 300, 100, "leather", 1, 1, 5)
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const lebrons = await Database.raw(`
        INSERT INTO freshgear.products (sku, title, description, image_url, color, price, qty, material, brand_id, type_id, user_id) 
        Values("AIRMX453464GRN", "OG", "Fill Description", "/img/products/nike-airmax95-og-green.png", "green", 400, 100, "Leather", 1, 2, 5)
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const lebrons = await Database.raw(`
        INSERT INTO freshgear.products (sku, title, description, image_url, color, price, qty, material, brand_id, type_id, user_id) 
        Values("JRDN98098RD", "Retro High OG", "Fill Description", "/img/products/jordan-1-retrohighog-red.png", "Red", 200, 100, "Leather", 5, 1, 5)
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const lebrons = await Database.raw(`
        INSERT INTO freshgear.products (sku, title, description, image_url, color, price, qty, material, brand_id, type_id, user_id) 
        Values("JRDN377745BLE", "Retro Low BG", "Fill Description", "/img/products/jordan-11-retrolowbg-babyblue.png", "blue", 250, 100, "Leather", 5, 15, 5)
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const lebrons = await Database.raw(`
        INSERT INTO freshgear.products (sku, title, description, image_url, color, price, qty, material, brand_id, type_id, user_id) 
        Values("YZY83428GRY", "Boost 700", "Fill Description", "/img/products/adidas-yeezy-boost700-grey.png", "Grey", 550, 100, "Leather", 2, 4, 5)
      `);
		} catch (error) {
			console.log(error);
		}
		try {
			const lebrons = await Database.raw(`
        INSERT INTO freshgear.products (sku, title, description, image_url, color, price, qty, material, brand_id, type_id, user_id) 
        Values("JMS384293PNDBLK", "Panda Bear", "Fill Description", "/img/products/adidas-jeremyscott-pandabear-black.png", "Black", 550, 100, "Fur", 2, 6, 5)
      `);
		} catch (error) {
			console.log(error);
		}
		console.log('Added Products to Products Table');
	}
}

module.exports = ProductSeeder;
