import { SEND_MESSAGE, DELETE_MESSAGE } from '../actions/messageActions';

const initialStore = {
    messages: {
        1: {
            sender: 'bot',
            text: 'Привет'
        },
        2: {
            sender: 'bot',
            text: 'Как дела?'
        }
    }
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
        default:
            return store;
    }
}