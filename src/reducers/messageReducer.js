import {
    LOAD_MESSAGES_REQUEST,
    LOAD_MESSAGES_SUCCESS,
    LOAD_MESSAGES_ERROR,
    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_ERROR,
    DELETE_MESSAGE_REQUEST,
    DELETE_MESSAGE_SUCCESS,
    DELETE_MESSAGE_ERROR
} from '../actions/messageActions';

const initialStore = {
    messages: {},
    isLoading: false,
    isAdding: false
};

export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case LOAD_MESSAGES_REQUEST: {
            return {
                ...store,
                isLoading: true
            };
        }
        case LOAD_MESSAGES_SUCCESS: {
            const { messages = {} } = action.payload.entities;

            return {
                ...store,
                messages,
                isLoading: false
            };
        }
        case LOAD_MESSAGES_ERROR: {
            return {
                ...store,
                isLoading: false
            };
        }
        case SEND_MESSAGE_REQUEST: {
            return {
                ...store,
                isLoading: true
            };
        }
        case SEND_MESSAGE_SUCCESS: {
            const { messageId, text, sender } = action.payload;

            return {
                ...store,
                messages: {
                    ...store.messages,
                    [messageId]: {
                        text: text,
                        sender: sender

                    }
                }
            };
        }
        case SEND_MESSAGE_ERROR: {
            return {
                ...store,
                isAdding: false
            };
        }
        case DELETE_MESSAGE_REQUEST: {
            return {
                ...store,
                messages: {
                    ...store.messages,
                    [action.payload.id]: {
                        ...store.messages[action.payload.id],
                        isDeleting: true
                    }
                }
            };
        }
        case DELETE_MESSAGE_SUCCESS: {
            const { messages } = store;
            // делаем копию сообщений, так как нельзя напрямую изменять store
            const newMessages = { ...messages };
            delete newMessages[action.payload.id]; // удаляем по идентификатору

            return {
                ...store,
                messages: newMessages
            };
        }
        case DELETE_MESSAGE_ERROR: {
            return {
                ...store,
                isDeleting: false
            }
        }
        default:
            return store;
    }
}