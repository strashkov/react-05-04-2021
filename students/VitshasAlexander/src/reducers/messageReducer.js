import { SEND_MESSAGE } from "../actions/messageActions";

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
      const { message, sender, messageId } = action;
      return {
        messages: {
          ...store.messages,
          [messageId]: {
            text: message,
            sender: sender,
          },
        },
      };
    }
    default:
      return store;
  }
}
