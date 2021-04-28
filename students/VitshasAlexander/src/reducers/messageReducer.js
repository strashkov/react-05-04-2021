import { SEND_MESSAGE, DELETE_MESSAGE } from "../actions/messageActions";
import { DELETE_CHAT, LOAD_CHATS_SUCCESS } from "../actions/chatActions";

const initialStore = {
  messages: {},
};

export default function messageReducer(store = initialStore, action) {
  switch (action.type) {
    case SEND_MESSAGE: {
      const { messageId, text, sender } = action;
      const { messages } = store;
      return {
        ...store,
        messages: {
          ...messages,
          [messageId]: {
            text,
            sender,
          },
        },
      };
    }
    case DELETE_MESSAGE: {
      const { messageId } = action;
      const { messages } = store;
      const newMessages = { ...messages };

      if (messageId in newMessages) delete newMessages[messageId];
      return {
        ...store,
        messages: {
          ...newMessages,
        },
      };
    }
    case DELETE_CHAT: {
      const { messageList } = action;
      const { messages } = store;
      const newMessages = { ...messages };
      messageList.forEach((messageId) => {
        delete newMessages[messageId];
      });
      return {
        ...store,
        messages: {
          ...newMessages,
        },
      };
    }
    case LOAD_CHATS_SUCCESS: {
      const { messages } = action.payload.entities;

      return {
        ...store,
        messages,
      };
    }
    default:
      return store;
  }
}
