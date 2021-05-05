import update from 'react-addons-update';
import { SEND_MESSAGE, SUCCESS_MESSAGES_LOADING } from "../actions/messageActions";
import { SUCCESS_CHATS_LOADING } from "../actions/chatActions";
import { ADD_CHAT, GLOW_CHAT } from "../actions/chatActions";

const initialStore = {
  chats: {
    // 1: { title: "Чат 1", messageList: [1]},
    // 2: { title: "Чат 2", messageList: [2]},
    // 3: { title: "Чат 3", messageList: [] },
  },
  isLoading: true
};

export default function chatReducer(store = initialStore, action) {
  switch (action.type) {
    case SEND_MESSAGE: {
      const { chatId, messageId } = action;

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
  //   case SUCCESS_MESSAGES_LOADING: {
  //     const chats = {...store.chats};
  //     action.payload.forEach(msg => {
  //         const { id, chatId } = msg;
  //         chats[chatId].messageList.push(id);
  //     }
  //     );
  //     return update(store, {
  //         chats: { $set: chats },
  //         isLoading: { $set: false },
  //     });
  // }
  case SUCCESS_CHATS_LOADING: {
    return update(store, {
        chats: { $set: action.payload.entities.chats },
        isLoading: { $set: false },
    });
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
    case GLOW_CHAT: {

    }
    default:
      return store;
  }
}
