'use strict';

class UserController {
	index({ view }) {
		return view.render('account/index');
	}
	changePassword({ view }) {
		return view.render('account/change-password');
	}
	orders({ view }) {
		return view.render('account/orders');
	}
}

module.exports = UserController;
