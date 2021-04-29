import {
  ADD_CHAT,
  DISABLE_CHAT_HIGHLIGHT,
  ENABLE_CHAT_HIGHLIGHT,
  SEND_MESSAGE,
} from "../actions/chatActions";

const initialStore = {
  chats: {
    1: { title: "Чат 1", messageList: [1], highlight: false },
    2: { title: "Чат 2", messageList: [2], highlight: false },
    3: { title: "Chat 3", messageList: [], highlight: false },
  },
  messages: {
    1: { text: "Привет!", sender: "bot" },
    2: { text: "Здравствуйте!", sender: "bot" },
  },
};

export default function chatReducer(store = initialStore, action) {
  const { chats, messages } = store;

  switch (action.type) {
    case SEND_MESSAGE: {
      const { chatId, text, sender } = action;
      const messageId = Object.keys(messages).length + 1;

      return {
        chats: {
          ...chats,
          [chatId]: {
            ...chats[chatId],
            messageList: [...chats[chatId].messageList, messageId],
            highlight: chats[chatId].highlight,
          },
        },
        messages: {
          ...messages,
          [messageId]: {
            text: text,
            sender: sender,
          },
        },
      };
    }
    case ADD_CHAT: {
      const chatId = Object.keys(chats).length + 1;

      return {
        chats: {
          ...chats,
          [chatId]: {
            title: action.title,
            messageList: [],
            highlight: false,
          },
        },
        messages: messages,
      };
    }
    case ENABLE_CHAT_HIGHLIGHT:
      chats[action.chatId].highlight = true;
      return {
        chats: { ...chats },
        messages: messages,
      };
    case DISABLE_CHAT_HIGHLIGHT:
      chats[action.chatId].highlight = false;
      return {
        chats: { ...chats },
        messages: messages,
      };
    default:
      return store;
  }
}
