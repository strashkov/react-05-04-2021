import { 
    ADD_CHAT,
    DELETE_CHAT,
    LOAD_CHATS_REQUEST,
    LOAD_CHATS_SUCCESS,
    LOAD_CHATS_ERROR
 } from "../actions/chatActions";

const initialStore = {
    chats: {},
    isLoading: false,
};


export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case ADD_CHAT: {
            const chatId = Object.keys(store.chats).length + 1;
            const {chatMessageListId} = action;
            return {
                chats: {
                    ...store.chats,
                    [chatId]: {
                        title: action.title,
                        messageList: [chatMessageListId],
                        isRemoved: false
                    }
                }
            };
        }
        case DELETE_CHAT: {
            const {chatId} = action;
            return {
                chats: {
                    ...store.chats,
                    [chatId]: {
                        ...store.chats[chatId],
                        isRemoved: true 
                    }
                }
            }
        }
        case LOAD_CHATS_REQUEST: {
            return {
                ...store,
                isLoading: true
            }
        }
        case LOAD_CHATS_ERROR: {
            return {
                ...store,
                isLoading: false
            }
        }
        case LOAD_CHATS_SUCCESS: {
            const { chats } = action.payload.entities;
            return {
                ...store,
                chats,
                isLoading: false
            }
        }
        default:
            return store;
    }
}
