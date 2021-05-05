import { SEND_MESSAGE, DELETE_MESSAGE } from "../actions/messageActions";
import {
  ADD_CHAT,
  DELETE_CHAT,
  MARK_CHAT_UNREAD,
  MARK_CHAT_READ,
  LOAD_CHATS_REQUEST,
  LOAD_CHATS_SUCCESS,
  LOAD_CHATS_ERROR,
} from "../actions/chatActions";

const initialStore = {
  chats: {},
  isLoading: false,
};

export default function chatReducer(store = initialStore, action) {
  switch (action.type) {
    case SEND_MESSAGE: {
      const { chats } = store;
      const { messageId, chatId } = action;
      return {
        chats: {
          ...chats,
          [chatId]: {
            ...chats[chatId],
            messageList: [...chats[chatId].messageList, messageId],
          },
        },
      };
    }
    case DELETE_MESSAGE: {
      const { messageId, chatId } = action;
      const { chats } = store;
      return {
        chats: {
          ...chats,
          [chatId]: {
            ...chats[chatId],
            messageList: [
              ...chats[chatId].messageList.filter((item) => item !== messageId),
            ],
          },
        },
      };
    }
    case ADD_CHAT: {
      const { chats } = store;
      const lastChatId = Number(Object.keys(chats).pop());
      const chatId = lastChatId + 1;

      return {
        chats: {
          ...chats,
          [chatId]: {
            title: action.title,
            messageList: [],
          },
        },
      };
    }
    case DELETE_CHAT: {
      const { chatId } = action;
      const { chats } = store;
      console.log(`Надо бы удалить чат ${chatId}`);
      if (chatId in chats) delete chats[chatId];
      return {
        chats: {
          ...chats,
        },
      };
    }
    case MARK_CHAT_UNREAD: {
      const { chatId } = action;

      return {
        ...store,
        chats: {
          ...store.chats,
          [chatId]: {
            ...store.chats[chatId],
            unread: true,
          },
        },
      };
    }
    case MARK_CHAT_READ: {
      const { chatId } = action;

      return {
        ...store,
        chats: {
          ...store.chats,
          [chatId]: {
            ...store.chats[chatId],
            unread: false,
          },
        },
      };
    }
    case LOAD_CHATS_REQUEST: {
      return {
        ...store,
        isLoading: true,
      };
    }
    case LOAD_CHATS_ERROR: {
      return {
        ...store,
        isLoading: false,
      };
    }
    case LOAD_CHATS_SUCCESS: {
      const { chats } = action.payload.entities;

      return {
        ...store,
        chats,
        isLoading: false,
      };
    }

    default:
      return store;
  }
}
