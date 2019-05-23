'use strict';

class AdminController {
	index({ view, auth }) {
		return view.render('admin/dashboard');
	}
}

module.exports = AdminController;
