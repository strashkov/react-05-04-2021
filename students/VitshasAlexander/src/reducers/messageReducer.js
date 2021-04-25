import { SEND_MESSAGE, DELETE_MESSAGE } from "../actions/messageActions";

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
      console.log(`Надо бы удалить сообщение ${messageId}`);
      //      if (messageId in store.messages) delete messages[messageId];
      return {
        messages: {
          ...store.messages,
        },
      };
    }
    default:
      return store;
  }
}
