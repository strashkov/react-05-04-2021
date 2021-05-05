import {
    DELETE_MESSAGE,
    SEND_MESSAGE
} from '../actions/messageActions.js';

import { LOAD_CHATS_SUCCESS } from '../actions/chatActions.js';

const initialStore = {
    messages: {}
};


export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            const { messageId, text, sender } = action;

            return {
                messages: {
                    ...store.messages,
                    [messageId]: {
                        text,
                        sender
                    }
                }
            };
        }
        case DELETE_MESSAGE: {
            const { messageId } = action;
            // делаем копию сообщений, так как нельзя напрямую изменять store
            const newMessages = { ...store.messages };
            delete newMessages[messageId]; // удаляем по идентификатору

            return {
                ...store,
                messages: newMessages
            };
        }
        case LOAD_CHATS_SUCCESS: {
            const { messages } = action.payload.entities;

            return {
                ...store,
                messages
            };

        }
        default:
            return store;
    }
}