import {
  SET_CHAT_LIST,
  SET_MESSAGE_LIST
} from "./types";

export const initialState = {
  chat_list: {
    0: {
      title: 'Чат 1',
    },
    1: {
      title: 'Чат 2',
    },
  },
  messages_list: {
    0: [
      {
        id: 0,
        msg: 'Привет',
        autor: 'User'
      },
      {
        id: 1,
        msg: 'Привет, я бот Владимир!',
        autor: 'Bot'
      }],
    1: [
      {
        id: 0,
        msg: 'Здарова',
        autor: 'User'
      },
      {
        id: 1,
        msg: 'Hello, I`am bot!',
        autor: 'Bot'
      }]
  },
};

export default function AppReducer(state, action) {
  switch (action.type) {
    case SET_MESSAGE_LIST:
      return { ...state, messages_list: action.messages_list };
    case SET_CHAT_LIST:
      return { ...state, chat_list: action.chat_list };
    default:
      return state;
  }
}
