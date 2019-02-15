'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CreateAddressesSchema extends Schema {
	up() {
		this.raw(
			`CREATE TABLE addresses(
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        address VARCHAR(100) NOT NULL,
        address_2 VARCHAR(100),
        city VARCHAR(60) NOT NULL,
        country VARCHAR(3) NOT NULL,
        zipcode VARCHAR(5) NOT NULL,
        user_id INT UNSIGNED NOT NULL,
        FOREIGN KEY(user_id) REFERENCES users(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
      `
		);
	}

	down() {
		this.raw('DROP TABLE addresses');
	}
}

module.exports = CreateAddressesSchema;
