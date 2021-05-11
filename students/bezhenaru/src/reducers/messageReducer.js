import { SEND_MESSAGE ,
            DELETE_MESSAGE,
            LOAD_MESSAGES_REQUEST,
            LOAD_MESSAGES_SUCCESS,} from '../actions/messageActions';

const initialStore = {
    messages: {},
    isLoading: false
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
        case DELETE_MESSAGE: {
            console.log(1);
            const { messageId } = action;
            // делаем копию сообщений, так как нельзя напрямую изменять store
            const newMessages = { ...store.messages };
            delete newMessages[messageId]; // удаляем по идентификатору

            return {
                ...store,
                messages: newMessages
            };
        }
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
                isLoading: false,
                messages
            };
        }
        default:
            return store;
    }
}
