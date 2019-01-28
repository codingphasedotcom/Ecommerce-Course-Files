'use strict';

class CartController {
	checkout({ view }) {
		return view.render('cart/checkout');
	}
}

module.exports = CartController;
