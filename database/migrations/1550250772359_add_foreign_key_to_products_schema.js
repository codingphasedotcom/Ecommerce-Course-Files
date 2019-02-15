'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AddForeignKeyToProductsSchema extends Schema {
	up() {
		this.raw(
			`ALTER TABLE products
      ADD CONSTRAINT fk_brand_id_products
      FOREIGN KEY (brand_id) REFERENCES brands(id)
      `
		);

		this.raw(
			`ALTER TABLE products
      ADD CONSTRAINT fk_user_id_products
      FOREIGN KEY (user_id) REFERENCES users(id)
      `
		);
		this.raw(
			`ALTER TABLE products
      ADD CONSTRAINT fk_type_id_products
      FOREIGN KEY (type_id) REFERENCES types(id)
      `
		);
	}

	down() {
		this.raw(`
      ALTER TABLE products
      DROP FOREIGN KEY fk_brand_id_products
      `);

		this.raw(`
      ALTER TABLE products
      DROP FOREIGN KEY fk_user_id_products
      `);
		this.raw(`
      ALTER TABLE products
      DROP FOREIGN KEY fk_type_id_products
      `);
	}
}

module.exports = AddForeignKeyToProductsSchema;
