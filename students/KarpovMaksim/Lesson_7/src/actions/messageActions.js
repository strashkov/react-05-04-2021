import { createAction } from 'redux-api-middleware';
import { normalize } from 'normalizr';
import { messages } from '../utils/schemes';

export const SEND_MESSAGE = '@@chat/SEND_MESSAGE';
export const LOAD_MESSAGES_REQUEST = '@@chat/LOAD_MESSAGES_REQUEST';
export const LOAD_MESSAGES_SUCCESS = '@@chat/LOAD_MESSAGES_SUCCESS';
export const LOAD_MESSAGES_ERROR = '@@chat/LOAD_MESSAGES_ERROR';

export const sendMessage = (messageId, text, userName, chatId) => {
  return {
    type: SEND_MESSAGE,
    messageId,
    text,
    userName,
    chatId
  }
};

export const loadMessages = () => {
  return createAction ({
    endpoint: '/api/messages.json',
    method: 'GET',
    types: [
      LOAD_MESSAGES_REQUEST,{ 
        type: LOAD_MESSAGES_SUCCESS,
        payload: async (action, state, res) =>
        {
          const json = await res.json();
          return normalize(json, [messages]) 
        }
      }, LOAD_MESSAGES_ERROR ]
  })
};