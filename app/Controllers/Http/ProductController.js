'use strict';

class ProductController {
	index({ view }) {
		const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		return view.render('products/all', { products });
	}
	newArrivals({ view }) {
		const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		return view.render('products/all', { products });
	}
	show({ view }) {
		return view.render('products/single');
	}
}

module.exports = ProductController;
