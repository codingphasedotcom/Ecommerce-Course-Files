'use strict';
const Database = use('Database');
const sanitize = use('sqlstring');
const { validate } = use('Validator');

class TypeController {
	async index({ view, auth, request, response }) {
		let pageRows = request.all().hasOwnProperty('rows')
			? parseInt(request.all().rows)
			: 10;
		let start = request.all().hasOwnProperty('page')
			? (parseInt(request.all().page) - 1) * pageRows
			: 0;

		try {
			let allTypes = await Database.raw(`
				SELECT *, DATE_FORMAT(types.updated_at, '%m/%d/%Y') as updated_at FROM types 
				ORDER BY title ASC
				LIMIT ${start}, ${pageRows}
      `);
			allTypes = allTypes[0];
			let tableRows = await Database.raw(`
				SELECT COUNT("id") as tableRows FROM types
			`);

			tableRows = tableRows[0][0].tableRows;

			let totalPages =
				tableRows > pageRows ? Math.ceil(tableRows / pageRows) : 1;

			let arrayOfPages = [];
			let i = 0;
			for (i = 0; i < totalPages; i++) {
				arrayOfPages.push(i + 1);
			}
			return view.render('admin/products/types/all_types.edge', {
				allTypes,
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
			return view.render('admin/products/types/create_type.edge');
		} catch (error) {
			console.log(error);
			return response.redirect('back');
		}
	}
	async store({ view, auth, request, response, session }) {
		const validation = await validate(request.all(), {
			title: 'required|unique:types,title',
			description: 'required'
		});
		if (validation.fails()) {
			session.withErrors(validation.messages()).flashAll();
			session.flash({ errors: 'There Was a problem' });
			return response.redirect('back');
		}

		try {
			const post = request.post();
			await Database.raw(`
        INSERT INTO types (title, description) VALUES(
          ${sanitize.escape(post.title)}, 
          ${sanitize.escape(post.description)}
        )
      `);
			session.flash({
				notification: 'You have successfully submitted changes'
			});
			return response.redirect('/admin/products/types');
		} catch (error) {
			console.log(error);
			return response.redirect('back');
		}
	}
	async edit({ view, auth, request, response, params }) {
		try {
			let type = await Database.raw(`
        SELECT * from types WHERE id = ${params.id}
      `);
			type = type[0][0];

			return view.render('admin/products/types/edit_type.edge', { type });
		} catch (error) {
			console.log(error);
			return response.redirect('back');
		}
	}
	async update({ view, auth, request, response, params, session }) {
		const validation = await validate(request.all(), {
			title: 'required',
			description: 'required'
		});
		if (validation.fails()) {
			session.withErrors(validation.messages()).flashAll();
			session.flash({ errors: 'There Was a problem' });
			return response.redirect('back');
		}
		try {
			const post = request.post();
			await Database.raw(`
        UPDATE types 
        SET
        title = ${sanitize.escape(post.title)}, 
        description = ${sanitize.escape(post.description)}
        WHERE id = ${params.id}
      `);
			session.flash({
				notification: 'You have successfully submitted changes'
			});
			return response.redirect(`/admin/products/types/${params.id}/edit`);
		} catch (error) {
			console.log(error);

			return response.redirect('back');
		}
	}
	async delete({ view, auth, request, response, params }) {
		try {
			const post = request.post();
			await Database.raw(`
        DELETE FROM types
        WHERE id = ${params.id}
			`);
			session.flash({
				notification: 'Your request to delete was successful'
			});
			return response.redirect(`/admin/products/types`);
		} catch (error) {
			console.log(error);
			return response.redirect('back');
		}
	}
}

module.exports = TypeController;
