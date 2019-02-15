'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CreateItemsSchema extends Schema {
	up() {
		this.raw(
			`CREATE TABLE items(
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        sku VARCHAR(100) NOT NULL,
        title VARCHAR(100) NOT NULL,
        image_url TEXT,
        price FLOAT UNSIGNED NOT NULL,
        qty INT UNSIGNED NOT NULL,
        brand_id INT UNSIGNED NOT NULL,
        type_id INT UNSIGNED NOT NULL,
        user_id INT UNSIGNED NOT NULL,
        FOREIGN KEY(brand_id) REFERENCES brands(id),
        FOREIGN KEY(type_id) REFERENCES types(id),
        FOREIGN KEY(user_id) REFERENCES users(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
      `
		);
	}

	down() {
		this.raw('DROP TABLE items');
	}
}

module.exports = CreateItemsSchema;
