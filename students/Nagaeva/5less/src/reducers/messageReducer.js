import {
    SEND_MESSAGE
} from "../actions/messageActions";

const initialStore = {
    messages: {
        1: {
            sender: "robot",
            text: "Hi!",
        },
        2: {
            sender: "robot",
            text: "I don`t understand",
        }
    },
};

export default function messageReducer(store = initialStore, action) {
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