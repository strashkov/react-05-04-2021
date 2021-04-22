import { SEND_MESSAGE } from "../actions/messageActions";
import { ADD_CHAT } from "../actions/chatActions";

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
  user: {
    name: "Filipp Romanovski",
    bio: "My Route to Santiago de Compostela",
    photo: "filipp-romanovski-eejet4GDlzc-unsplash.jpg",
  },
};

export default function chatReducer(store = initialStore, action) {
  switch (action.type) {
    case SEND_MESSAGE: {
      const { message, sender, messageId, chatId } = action;

      return {
        chats: {
          ...store.chats,
          [chatId]: {
            ...store.chats[chatId],
            messageList: [...store.chats[chatId].messageList, messageId],
          },
        },
        messages: {
          ...store.messages,
          [messageId]: {
            text: message,
            sender: sender,
          },
        },
        user: {
          ...store.user,
        },
      };
    }
    case ADD_CHAT: {
      const chatId = Object.keys(store.chats).length + 1;
      const { title } = action;
      return {
        chats: {
          ...store.chats,
          [chatId]: {
            title: title,
            messageList: [],
          },
        },
        messages: {
          ...store.messages,
        },
        user: {
          ...store.user,
        },
      };
    }
    default:
      return store;
  }
}
