import React, { Component } from 'react';
export const CartContext = React.createContext();
export class CartProvider extends Component {
	state = {
		name: 'Joe',
		popupActive: true
	};
	render() {
		return (
			<CartContext.Provider
				value={{
					state: this.state,
					clickedBtn: event => {
						event.preventDefault();
						console.log('this.state');
						this.setState({ popupActive: !this.state.popupActive }, () =>
							console.log(this.state)
						);
					}
				}}
			>
				{this.props.children}
			</CartContext.Provider>
		);
	}
}
