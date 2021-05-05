import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './containers/Router.js';
import { Provider } from 'react-redux';
import initStore from './Utils/store.js';

let store = initStore();

window.store = store;

ReactDom.render (
    <Provider store={store}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);