import { apiMiddleware, createMiddleware } from 'redux-api-middleware';
import messageMiddleware from './messageMiddleware';

export default [
  apiMiddleware,
  messageMiddleware,
  createMiddleware()
];