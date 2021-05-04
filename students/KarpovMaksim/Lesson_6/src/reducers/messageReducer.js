import { SEND_MESSAGE } from '../actions/messageActions';

const initialStore = {
  chats: {
      1: {
          title: 'Чат 1', 
          messageList: [1],
          isRemoved: false
      },
      2: {
          title: 'Чат 2',
          messageList: [2],
          isRemoved: false
      },
      3: {
          title: 'Чат 3',
          messageList: [3],
          isRemoved: true
      },
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
      default:
          return store;
  }
}
