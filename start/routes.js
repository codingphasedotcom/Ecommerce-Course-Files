'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/', 'PageController.home');
Route.get('/about', 'PageController.about');

// Admin
Route.get('/admin', 'Admin/AdminController.index');
// Admin/Products/Types==================================================
Route.get('/admin/products/types', 'Admin/Products/TypeController.index');
Route.post('/admin/products/types', 'Admin/Products/TypeController.store');
Route.get(
	'/admin/products/types/create',
	'Admin/Products/TypeController.create'
);
Route.put('/admin/products/types/:id', 'Admin/Products/TypeController.update');
Route.get(
	'/admin/products/types/:id/edit',
	'Admin/Products/TypeController.edit'
);
Route.get(
	'/admin/products/types/:id/delete',
	'Admin/Products/TypeController.delete'
);
// Admin/Products/Categories==================================================
Route.get(
	'/admin/products/categories',
	'Admin/Products/CategoryController.index'
);
Route.post(
	'/admin/products/categories',
	'Admin/Products/CategoryController.store'
);
Route.get(
	'/admin/products/categories/create',
	'Admin/Products/CategoryController.create'
);
Route.put(
	'/admin/products/categories/:id',
	'Admin/Products/CategoryController.update'
);
Route.get(
	'/admin/products/categories/:id/edit',
	'Admin/Products/CategoryController.edit'
);
Route.get(
	'/admin/products/categories/:id/delete',
	'Admin/Products/CategoryController.delete'
);
// Admin/Products/Tags==================================================
Route.get('/admin/products/tags', 'Admin/Products/TagController.index');
Route.post('/admin/products/tags', 'Admin/Products/TagController.store');
Route.get('/admin/products/tags/create', 'Admin/Products/TagController.create');
Route.put('/admin/products/tags/:id', 'Admin/Products/TagController.update');
Route.get('/admin/products/tags/:id/edit', 'Admin/Products/TagController.edit');
Route.get(
	'/admin/products/tags/:id/delete',
	'Admin/Products/TagController.delete'
);

// Products
Route.get('/products', 'ProductController.index');
Route.get('/:brand/:subcategory/:slug', 'ProductController.show');
Route.get('/products/new-arrivals', 'ProductController.newArrivals').middleware(
	'auth'
);

// Cart
Route.get('/cart/checkout', 'CartController.checkout');

// Account
Route.get('/account', 'UserController.index');
Route.get('/account/change-password', 'UserController.changePassword');
Route.get('/account/orders', 'UserController.orders');
Route.get('/register', 'AuthController.register');
Route.post('/register', 'AuthController.storeUser');
Route.get('/login', 'AuthController.login');
Route.post('/login', 'AuthController.handleLogin');
Route.get('/logout', 'AuthController.logout');
