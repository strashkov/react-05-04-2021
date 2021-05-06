import { SEND_MESSAGE } from '../actions/messageActions';

const initialStore = {
    messages: {
        1: {
            author: 'Robot',
            text: 'Привет',
        },
        2: {
            author: 'Robot',
            text: 'dsadasd',
        },
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
                        author,
                    },
                },
            };
        }
        default:
            return store;
    }
}
