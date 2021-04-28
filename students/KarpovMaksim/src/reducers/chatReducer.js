import { SEND_MESSAGE } from '../actions/messageActions';
import { ADD_CHAT } from "../actions/chatActions";

const initialStore = {
    chats: {
        1: {title: 'Чат 1', messageList: [1,3]},
        2: {title: 'Чат 2', messageList: [2]},
        3: {title: 'Чат 3', messageList: [3]},
    },
    messages: {
        1: {        
            text: 'Hello!',
            userName: 'Робот'
          },
        2: {
            text: 'Hello!efefe',
            userName: 'Робот'
          },
        3: {
            text: 'Hello!efefef',
            userName: 'Робот'
          }
      },
};


export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            const { chatId, messageId, text, userName } = action;
            return {
                chats: {
                    ...store.chats,
                    [chatId]: {
                        ...store.chats[chatId],
                        messageList: [
                            ...store.chats[chatId].messageList,
                            messageId
                        ]
                    }
                },
                messages: {
                    ...store.messages,
                    [messageId]: {
                        text: text,
                        userName: userName

                    }
                }
            };
        }
        case ADD_CHAT: {
            const chatId = Object.keys(store.chats).length + 1;

            return {
                chats: {
                    ...store.chats,
                    [chatId]: {
                        title: action.title,
                        messageList: [1]
                    }
                },
            };
        }
        default:
            return store;
    }
}
