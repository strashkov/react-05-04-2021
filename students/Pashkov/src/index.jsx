import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/router/Router';
import './style/style.css';
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>,
    document.getElementById('app'),
);




