'use strict';

class PageController {
	home({ view, auth }) {
		return view.render('pages/home');
	}
	about({ view }) {
		return view.render('pages/about');
	}
}

module.exports = PageController;
