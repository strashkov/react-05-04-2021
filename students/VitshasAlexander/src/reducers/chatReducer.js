import { SEND_MESSAGE, DELETE_MESSAGE } from "../actions/messageActions";
import { ADD_CHAT, DELETE_CHAT } from "../actions/chatActions";

const initialStore = {
  chats: {
    1: {
      title: "Chat 1",
      messageList: [1],
    },
    2: {
      title: "Chat 2",
      messageList: [1, 2],
    },
    3: {
      title: "Chat 3",
      messageList: [3],
    },
  },
};

export default function chatReducer(store = initialStore, action) {
  switch (action.type) {
    case SEND_MESSAGE: {
      const { messageId, chatId } = action;
      return {
        chats: {
          ...store.chats,
          [chatId]: {
            ...store.chats[chatId],
            messageList: [...store.chats[chatId].messageList, messageId],
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
              ...chats[chatId].messageList.filter((item) => item != messageId),
            ],
          },
        },
      };
    }
    case ADD_CHAT: {
      const chatId = Object.keys(store.chats).length + 1;
      return {
        chats: {
          ...store.chats,
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
    default:
      return store;
  }
}
