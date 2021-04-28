import { createAction } from "redux-api-middleware";
import { normalize } from "normalizr";
import { chats } from "../utils/schemes";

export const ADD_CHAT = "@@chat/ADD_CHAT";
export const DELETE_CHAT = "@@chat/DELETE_CHAT";

export const MARK_CHAT_UNREAD = "@@chat/MARK_CHAT_UNREAD";
export const MARK_CHAT_READ = "@@chat/MARK_CHAT_READ";

export const LOAD_CHATS_REQUEST = "@@chat/LOAD_CHATS_REQUEST";
export const LOAD_CHATS_SUCCESS = "@@chat/LOAD_CHATS_SUCCESS";
export const LOAD_CHATS_ERROR = "@@chat/LOAD_CHATS_ERROR";

export const addChat = (title) => {
  return {
    type: ADD_CHAT,
    title,
  };
};

export const deleteChat = (chatId, messageList) => {
  return {
    type: DELETE_CHAT,
    chatId,
    messageList,
  };
};

export const markChatUnread = (chatId) => {
  return {
    type: MARK_CHAT_UNREAD,
    chatId,
  };
};

export const markChatRead = (chatId) => {
  return {
    type: MARK_CHAT_READ,
    chatId,
  };
};
export const loadChats = () => {
  return createAction({
    endpoint: "/api/chats.json",
    method: "GET",
    types: [
      LOAD_CHATS_REQUEST,
      {
        type: LOAD_CHATS_SUCCESS,
        payload: async (action, state, res) => {
          const json = await res.json();
          return normalize(json, [chats]);
        },
      },
      LOAD_CHATS_ERROR,
    ],
  });
};
