import { createMiddleware } from 'redux-api-middleware'
import messageMiddleware from './messageMiddleware.js';
import routerMiddleware from './routerMiddleware.js';

export default [
    createMiddleware(),
    messageMiddleware,
    routerMiddleware
];