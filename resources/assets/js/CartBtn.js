import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CartBtn extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<a href="#" className="cart-link">
				Cart<div>4</div>
			</a>
		);
	}
}

const CartBtnRoot = document.getElementById('CartBtnRoot');

ReactDOM.render(<CartBtn />, CartBtnRoot);
