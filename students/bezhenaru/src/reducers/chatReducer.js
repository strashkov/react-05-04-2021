import { SEND_MESSAGE } from '../actions/messageActions';
import { ADD_CHAT } from '../actions/chatActions';

const initialStore = {
    chats: {
        1: { title: 'Иван Петров', messageList: [1, 2] },
        2: { title: 'Сергей Иванов', messageList: [2] },
        3: { title: 'Андрей Сидоров', messageList: [] },
    },
};

export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            const { chatId, messageId } = action;
            

            return {
                chats: {
                    ...store.chats,
                    [chatId]: {
                        ...store.chats[chatId],
                        messageList: [
                            ...store.chats[chatId].messageList,
                            messageId,
                        ],
                    },
                },
            };
        }
        case ADD_CHAT: {
            const chatId = Object.keys(store.chats).length + 1;

            return {
                chats: {
                    ...store.chats,
                    [chatId]: {
                        title: action.title,
                        messageList: [],
                    },
                },
            };
        }
        default:
            return store;
    }
}
