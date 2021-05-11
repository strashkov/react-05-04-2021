import { SEND_MESSAGE, 
            DELETE_MESSAGE } from '../actions/messageActions';
import { ADD_CHAT,
            MARK_CHAT_UNREAD,
            MARK_CHAT_READ,
            LOAD_CHATS_REQUEST,
            LOAD_CHATS_SUCCESS,
            LOAD_CHATS_ERROR } from '../actions/chatActions';

const initialStore = {
    chats: {
        // 1: { title: 'Иван Петров', messageList: [1, 2] },
        // 2: { title: 'Сергей Иванов', messageList: [2] },
        // 3: { title: 'Андрей Сидоров', messageList: [] },
    },
    isLoading: false
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
                            messageId,
                        ],
                    },
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
                        messageList: [],
                    },
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
            console.log("delete message from reducer")
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
        case LOAD_CHATS_REQUEST: {
            return {
                ...store,
                isLoading: true
            };
        }
        case LOAD_CHATS_ERROR: {
            return {
                ...store,
                isLoading: false
            };
        }
        case LOAD_CHATS_SUCCESS: {
            const { chats } = action.payload.entities;

            return {
                ...store,
                chats,
                isLoading: false
            };
        }
        default:
            return store;
    }
}
