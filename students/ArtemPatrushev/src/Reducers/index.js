import { combineReducers } from 'redux';
import chatReducer from './chatReducer.js';
import messageReducer from './messageReducer.js';
import profileReducer from './profileReducer.js';

export default combineReducers( {
    chatReducer,
    messageReducer,
    profileReducer
});