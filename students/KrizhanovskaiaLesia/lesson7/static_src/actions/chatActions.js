export const ADD_CHAT = "@@chat/ADD_CHAT";
export const GLOW_CHAT = '@@message/GLOW_CHAT';
import { normalize } from 'normalizr';
import { RSAA, getJSON } from 'redux-api-middleware';
import { chats } from '../utils/schemas';

export const addChat = (title) => ({
  type: ADD_CHAT,
  title,
});

export const glowChat = (chatId) => ({
  type: GLOW_CHAT,
  chatId,
});

export const START_CHATS_LOADING = '@@chat/START_CHATS_LOADING';
export const SUCCESS_CHATS_LOADING = '@@chat/SUCCESS_CHATS_LOADING';
export const ERROR_CHATS_LOADING = '@@chat/ERROR_CHATS_LOADING';

export const loadChats = () => ({
   [RSAA]: {
       endpoint: '/api/chats.json',
       method: 'GET',
       types: [
           START_CHATS_LOADING,
           {
               type: SUCCESS_CHATS_LOADING,
               payload: (action, state, res) => getJSON(res).then(
                   json => normalize(json, [chats]),
               ),
           },
           ERROR_CHATS_LOADING,
       ],
   },
});
