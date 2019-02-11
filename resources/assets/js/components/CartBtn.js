import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openingCart } from '../actions/allActions';

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
			<a href="#" className="cart-link" onClick={this.props.openingCart}>
				Cart<div>4</div>
			</a>
		);
	}
}

const mapStateToProps = state => {
	console.log(state);
	return state;
};

export default connect(
	mapStateToProps,
	{
		openingCart
	}
)(CartBtn);
