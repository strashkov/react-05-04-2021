import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router.jsx';
import './style/style.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import initStore from "./utils/store";

ReactDOM.render(
    <Provider store={initStore()}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>,
    </Provider>,
    document.getElementById('app'),
);




