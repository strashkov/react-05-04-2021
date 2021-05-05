import { SEND_MESSAGE } from '../Actions/messageAction.js';

const initialStore = {
    messages: {
        1: {
            text: 'Hi!',
            author: 'bot'
        },
        2: {
            text: 'this is chat number 2',
            author: 'bot'
        },
        3: {
            text: 'this is chat number 3',
            author: 'bot'
        }
    },
};


export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            const { messageId, text, author } = action;

            return {
                messages: {
                    ...store.messages,
                    [messageId]: {
                        text,
                        author
                    }
                }
            };
        }
        default:
            return store;
    }
}