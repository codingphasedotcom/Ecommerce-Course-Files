'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CreateProductsSchema extends Schema {
	up() {
		this.raw(
			`CREATE TABLE products(
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        sku VARCHAR(100) NOT NULL,
        title VARCHAR(100) NOT NULL,
        description TEXT,
        image_url TEXT,
        color VARCHAR(20) NOT NULL,
        price FLOAT UNSIGNED NOT NULL,
        qty INT UNSIGNED NOT NULL,
        material VARCHAR(100) NOT NULL,
        brand_id INT UNSIGNED NOT NULL,
        type_id INT UNSIGNED NOT NULL,
        user_id INT UNSIGNED NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
      `
		);
	}

	down() {
		this.raw('DROP TABLE products');
	}
}

module.exports = CreateProductsSchema;
