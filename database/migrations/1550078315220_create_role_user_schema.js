'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CreateRoleUserSchema extends Schema {
	up() {
		this.raw(
			`CREATE TABLE role_user(
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        role_id INT UNSIGNED NOT NULL,
        user_id INT UNSIGNED NOT NULL,
        FOREIGN KEY(role_id) REFERENCES roles(id),
        FOREIGN KEY(user_id) REFERENCES users(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
      `
		);
	}

	down() {
		this.raw('DROP TABLE role_user');
	}
}

module.exports = CreateRoleUserSchema;
