import { SEND_MESSAGE, DELETE_MESSAGE } from "../actions/messageActions";
import { DELETE_CHAT } from "../actions/chatActions";

const initialStore = {
  messages: {
    1: {
      sender: "robot",
      text: "Привет!",
    },
    2: {
      sender: "robot",
      text: "Geekbrains",
    },
    3: {
      sender: "robot",
      text: "React",
    },
  },
};

export default function messageReducer(store = initialStore, action) {
  switch (action.type) {
    case SEND_MESSAGE: {
      const { messageId, text, sender } = action;
      return {
        messages: {
          ...store.messages,
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
      if (messageId in messages) delete messages[messageId];
      return {
        messages: {
          ...messages,
        },
      };
    }
    case DELETE_CHAT: {
      const { chatId, messageList } = action;
      const { messages } = store;
      messageList.forEach((messageId) => {
        delete messages[messageId];
      });
      return {
        messages: {
          ...messages,
        },
      };
    }
    default:
      return store;
  }
}
