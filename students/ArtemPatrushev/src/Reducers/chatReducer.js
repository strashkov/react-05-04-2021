import { SEND_MESSAGE } from '../Actions/messageAction';
import { ADD_CHAT, MARK_CHAT_UNREAD, MARK_CHAT_READ } from "../Actions/chatActions";
import { DELETE_MESSAGE } from '../Actions/messageAction.js';

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
            const { chatId, messageId } = action;

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
        case DELETE_MESSAGE: {
            const { messageId, chatId } = action;
            const messageList = store.chats[chatId].messageList;
            const newMessageList = messageList.filter((mesId) => mesId !== messageId);

            return {
                ...store,
                chats: {
                    ...store.chats,
                    [chatId]: {
                        ...store.chats[chatId],
                        messageList: newMessageList
                    }
                }
            }
        }
        case MARK_CHAT_UNREAD: {
            const { chatId } = action;

            return {
                ...store,
                chats: {
                    ...store.chats,
                    [chatId]: {
                        ...store.chats[chatId],
                        unread: true
                    }
                }
            }
        }
        case MARK_CHAT_READ: {
            const { chatId } = action;

            return {
                ...store,
                chats: {
                    ...store.chats,
                    [chatId]: {
                        ...store.chats[chatId],
                        unread: false
                    }
                }
            }
        }
        default:
            return store;
    }
}