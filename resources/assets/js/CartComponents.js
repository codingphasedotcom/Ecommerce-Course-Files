import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers/allReducers';
import CartBtn from './components/CartBtn';
import CartPopup from './components/CartPopup';

const store = createStore(allReducers);

ReactDOM.render(
	<Provider store={store}>
		<CartBtn />
	</Provider>,
	document.getElementById('CartBtnRoot')
);
ReactDOM.render(
	<Provider store={store}>
		<CartPopup />
	</Provider>,
	document.getElementById('CartPopupRoot')
);
