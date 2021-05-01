import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';
import {
   START_CHATS_LOADING,
   SUCCESS_CHATS_LOADING,
   ERROR_CHATS_LOADING,
} from '../actions/chatActions';


const initialStore = {
  messages: {
  //   1: {
  //     sender: "bot",
  //     text: "Привет",
  //   },
  //   2: {
  //     sender: "bot",
  //     text: "Как дела?",
  //   },
  },
  isLoading: false,
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
    case START_CHATS_LOADING: {
      return update(store, {
         isLoading: { $set: true },
      });
  }
  case SUCCESS_CHATS_LOADING: {
      return update(store, {
          messages: { $set: action.payload.entities.messages },
      });
  }
  case ERROR_CHATS_LOADING: {
      return update(store, {
          isLoading: { $set: false },
      });
  }
  //   case START_MESSAGES_LOADING: {
  //     return update(store, {
  //        isLoading: { $set: true },
  //     });
  // }
  // case SUCCESS_MESSAGES_LOADING: {
  //     const messages = {};
  //     action.payload.forEach(msg => {
  //         const { text, sender } = msg;
  //         messages[msg.id] = { text, sender };
  //     });
  //     return update(store, {
  //         messages: { $set: messages },
  //         isLoading: { $set: false },
  //     });
  // }
  // case ERROR_MESSAGES_LOADING: {
  //     return update(store, {
  //         isLoading: { $set: false },
  //     });
  // }
    default:
      return store;
  }
}
