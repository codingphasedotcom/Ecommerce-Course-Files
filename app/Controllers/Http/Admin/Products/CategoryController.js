'use strict';
const Database = use('Database');
const sanitize = use('sqlstring');
const { validate } = use('Validator');

class CategoryController {
	async index({ view, auth, request, response }) {
		let pageRows = request.all().hasOwnProperty('rows')
			? parseInt(request.all().rows)
			: 10;
		let start = request.all().hasOwnProperty('page')
			? (parseInt(request.all().page) - 1) * pageRows
			: 0;
		try {
			let allCategories = await Database.raw(`
				SELECT *, DATE_FORMAT(categories.updated_at, '%m/%d/%Y') as updated_at FROM categories 
				ORDER BY title ASC
				LIMIT ${start}, ${pageRows}
      `);
			allCategories = allCategories[0];
			let tableRows = await Database.raw(`
				SELECT COUNT("id") as tableRows FROM categories
			`);

			tableRows = tableRows[0][0].tableRows;

			let totalPages =
				tableRows > pageRows ? Math.ceil(tableRows / pageRows) : 1;
			let arrayOfPages = [];
			let i = 0;
			for (i = 0; i < totalPages; i++) {
				arrayOfPages.push(i + 1);
			}
			return view.render('admin/products/categories/all_categories.edge', {
				allCategories,
				currentPage: request.all().hasOwnProperty('page')
					? parseInt(request.all().page)
					: 1,
				arrayOfPages,
				totalPages,
				pageRows
			});
		} catch (error) {
			console.log(error);
			return response.redirect('back');
		}
	}
	async create({ view, auth, request, response }) {
		try {
			return view.render('admin/products/categories/create_category.edge');
		} catch (error) {
			console.log(error);
			return response.redirect('back');
		}
	}
	async store({ view, auth, request, response, session }) {
		const validation = await validate(request.all(), {
			title: 'required|unique:categories,title'
		});
		if (validation.fails()) {
			session.withErrors(validation.messages()).flashAll();
			session.flash({ errors: 'There Was a problem' });
			return response.redirect('back');
		}

		try {
			const post = request.post();
			await Database.raw(`
        INSERT INTO categories (title) VALUES(
          ${sanitize.escape(post.title)}
        )
      `);
			session.flash({
				notification: 'You have successfully submitted changes'
			});
			return response.redirect('/admin/products/categories');
		} catch (error) {
			console.log(error);
			return response.redirect('back');
		}
	}
	async edit({ view, auth, request, response, params }) {
		try {
			let category = await Database.raw(`
        SELECT * from categories WHERE id = ${params.id}
      `);
			category = category[0][0];

			return view.render('admin/products/categories/edit_category.edge', {
				category
			});
		} catch (error) {
			console.log(error);
			return response.redirect('back');
		}
	}
	async update({ view, auth, request, response, params, session }) {
		const validation = await validate(request.all(), {
			title: 'required'
		});
		if (validation.fails()) {
			session.withErrors(validation.messages()).flashAll();
			session.flash({ errors: 'There Was a problem' });
			return response.redirect('back');
		}
		try {
			const post = request.post();
			await Database.raw(`
        UPDATE categories
        SET
        title = ${sanitize.escape(post.title)} 
        WHERE id = ${params.id}
      `);
			session.flash({
				notification: 'You have successfully submitted changes'
			});
			return response.redirect(`/admin/products/categories/${params.id}/edit`);
		} catch (error) {
			console.log(error);

			return response.redirect('back');
		}
	}
	async delete({ view, auth, request, response, params }) {
		try {
			const post = request.post();
			await Database.raw(`
        DELETE FROM categories
        WHERE id = ${params.id}
			`);
			session.flash({
				notification: 'Your request to delete was successful'
			});
			return response.redirect(`/admin/products/categories`);
		} catch (error) {
			console.log(error);
			return response.redirect('back');
		}
	}
}

module.exports = CategoryController;
