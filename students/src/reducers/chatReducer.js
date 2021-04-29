import { SEND_MESSAGE, DELETE_MESSAGE } from '../actions/messageActions';
import {
    ADD_CHAT,
    DELETE_CHAT,
    MARK_CHAT_UNREAD,
    MARK_CHAT_READ
} from "../actions/chatActions";

const initialStore = {
    chats: {
        1: {
            title: 'Вася Петров',
            messageList: [1]
        },
        2: {
            title: 'Петя Васечкин',
            messageList: [2]
        }
    },
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
                        messageList: [
                            ...store.chats[chatId].messageList,
                            messageId
                        ]
                    }
                },
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
                },
            };
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
        case DELETE_MESSAGE: {
            const { messageId, chatId } = action;
            const messageList = store.chats[chatId].messageList;
            const newMessageList = messageList.filter((mId) => mId !== messageId);

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
        case DELETE_CHAT: {
            const { chatId } = action;
            const newChats = { ...store.chats };

            delete newChats[chatId];
            return {
                ...store,
                chats: newChats
            };
        }
        default:
            return store;
    }
}
