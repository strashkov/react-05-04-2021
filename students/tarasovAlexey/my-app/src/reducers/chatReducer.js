import { SEND_MESSAGE } from '../actions/messageActions';
import { ADD_CHAT } from "../actions/chatActions";

const initialStore = {
    chats: {
        1: {
            title: 'Jim Parsons',
            messageList: [1],
            url: 'https://sun1-87.userapi.com/aax5ATB_nr1BeiGQFuOdJIhn3KH9PtBYQ6X2BQ/uFuOGYws3IU.jpg'
        },
        2: {
            title: 'Kaley Cuoco',
            messageList: [2],
            url: 'http://www.digicelebs.com/cpg/albums/SC/Kaley_Cuoco/normal_kaleycuocounknownphotoshoot501.jpg'
        }
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
                            messageId
                        ]
                    }
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
                        url: action.url
                    }
                },
            };
        }
        default:
            return store;
    }
}