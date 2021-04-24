import React from 'react';
import ReactDOM from 'react-dom';
import {AppState} from './context/app/AppState';
import {ChatApp} from './screens/ChatApp';
import './assets/index.css';
  ReactDOM.render(<AppState><ChatApp /></AppState>, document.getElementById('app'));
