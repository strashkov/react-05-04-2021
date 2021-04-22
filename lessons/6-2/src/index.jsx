import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import initStore from './utils/store';
import Router from './containers/Router';
import './styles/app.css';

const { store, persistor } = initStore();

ReactDom.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('app')
);
