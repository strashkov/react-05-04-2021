// import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';
import { ADD_CHAT } from '../actions/chatActions';
import { USER_INFO } from '../actions/profileAction';

const initialStore = {
    chats: {
        1: { title: 'Чат 1', messageList: [1] },
        2: { title: 'Чат 2', messageList: [2] },
        3: { title: 'Чат 3', messageList: [1] },
    },
    userInfo: {
        name: 'a',
        lastName: '',
        middleName: '',
        country: '',
        city: '',
        years: '',
    }
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
                            messageId
                        ]
                    }
                },
            }
        }
        case ADD_CHAT: {
            const chatId = Object.keys(store.chats).length + 1;
            return {
                chats: {
                    ...store.chats,
                    [chatId]: {
                        title: action.title,
                        messageList: []
                    }
                },
            };
        }
        case USER_INFO: {
            const { name, lastName, middleName, country, city, years, } = action;
            return {

            }
        }
        default:
            return store;
    }
}