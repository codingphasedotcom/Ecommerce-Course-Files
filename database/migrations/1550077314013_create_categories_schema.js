'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CreateCategoriesSchema extends Schema {
	up() {
		this.raw(
			`CREATE TABLE categories(
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(200) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
      `
		);
	}

	down() {
		this.raw('DROP TABLE categories');
	}
}

module.exports = CreateCategoriesSchema;
