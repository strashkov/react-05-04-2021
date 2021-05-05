import {
    SEND_MESSAGE
} from "../actions/messageActions";

const initialStore = {
    messages: {
        1: {
            sender: "bot",
            text: "Hi!",
        },
        2: {
            sender: "bot",
            text: "I don`t understand",
        }
    },
};

export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            const {
                text,
                sender,
                messageId
            } = action;
            return {
                messages: {
                    ...store.messages,
                    [messageId]: {
                        text,
                        sender
                    },
                },
            };
        }
        default:
            return store;
    }
}