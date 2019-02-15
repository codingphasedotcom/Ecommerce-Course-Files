'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CreateOrdersSchema extends Schema {
	up() {
		this.raw(
			`CREATE TABLE orders(
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        payment VARCHAR(100),
        total_amount FLOAT UNSIGNED,
        user_id INT UNSIGNED NOT NULL,
        address_id INT UNSIGNED NOT NULL,
        FOREIGN KEY(user_id) REFERENCES users(id),
        FOREIGN KEY(address_id) REFERENCES addresses(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
      `
		);
	}

	down() {
		this.raw('DROP TABLE orders');
	}
}

module.exports = CreateOrdersSchema;
