import { createAction } from 'redux-api-middleware';
import { normalize } from 'normalizr';
import { chats } from '../utils/schemes'

export const ADD_CHAT = '@@chat/ADD_CHAT';
export const DELETE_CHAT = '@@chat/DELETE_CHAT';
export const LOAD_CHATS_REQUEST = '@@chat/LOAD_CHATS_REQUEST';
export const LOAD_CHATS_SUCCESS = '@@chat/LOAD_CHATS_SUCCESS';
export const LOAD_CHATS_ERROR = '@@chat/LOAD_CHATS_ERROR';


export const addChat = (title, chatMessageListId) => {
  return {
    type: ADD_CHAT,
    title,
    chatMessageListId
  }
};

export const deleteChat = (chatId) => {
  return {
    type: DELETE_CHAT,
    chatId
  }
};

export const loadChats = () => {
  return createAction ({
    endpoint: '/api/chats.json',
    method: 'GET',
    types: [
      LOAD_CHATS_REQUEST,{ 
        type: LOAD_CHATS_SUCCESS,
        payload: async (action, state, res) =>
        {
          const json = await res.json();
          return normalize(json, [chats]) 
        }
      }, LOAD_CHATS_ERROR ]
  })
};