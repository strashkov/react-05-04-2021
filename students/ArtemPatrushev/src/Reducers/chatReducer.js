import { SEND_MESSAGE } from '../Actions/messageAction';
import { ADD_CHAT } from "../Actions/chatActions";

const initialStore = {
    chats: {
        1: { title: 'Chat 1', messageList: [1] },
        2: { title: 'Chat 2', messageList: [2] },
        3: { title: 'Chat 3', messageList: [3] }
    }
};


export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            // const messageId = Object.keys(this.state.messages).length + 1;
            const { chatId, messageId, text, author } = action;

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
                        messageList: []
                    }
                }
            };
        }
        default:
            return store;
    }
}