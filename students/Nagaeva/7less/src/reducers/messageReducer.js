import {
    DELETE_MESSAGE,
    SEND_MESSAGE
} from '../actions/messageActions';

import {
    LOAD_CHATS_SUCCESS
} from '../actions/chatActions';

const initialStore = {
    messages: {}
};


export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            const {
                messageId,
                text,
                sender
            } = action;

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
            const {
                messageId
            } = action;
            const newMessages = {
                ...store.messages
            };
            delete newMessages[messageId];

            return {
                ...store,
                messages: newMessages
            };
        }
        case LOAD_CHATS_SUCCESS: {
            const {
                messages
            } = action.payload.entities;

            return {
                ...store,
                messages
            };

        }
        default:
            return store;
    }
}