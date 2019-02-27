'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
	up() {
		this.raw(
			`CREATE TABLE users(
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(80)  UNIQUE,
        email VARCHAR(254) NOT NULL UNIQUE,
        password VARCHAR(60) NOT NULL,
        f_name VARCHAR(60) ,
        l_name VARCHAR(60) ,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
      `
		);
	}

	down() {
		this.raw('DROP TABLE users');
	}
}

module.exports = UserSchema;
