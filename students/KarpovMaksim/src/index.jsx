import React from 'react';
import ReactDom from 'react-dom';
import Router from './components/Router.jsx';
import {BrowserRouter} from 'react-router-dom';

ReactDom.render(
  <BrowserRouter>
    <Router/>
  </BrowserRouter>,
  document.getElementById('app')
);
