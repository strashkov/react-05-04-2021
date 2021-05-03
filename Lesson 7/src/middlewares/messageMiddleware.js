import { SEND_MESSAGE, sendMessage } from "../actions/messageActions";
import { markChatUnread, markChatRead } from '../actions/chatActions';
import { matchPath } from 'react-router-dom';
import { CHAT_PATTERN } from '../constants';

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const { chatId, sender } = action;

            if (sender === 'me') {
                setTimeout(() => {
                    const state = store.getState();
                    const { messages } = state.messageReducer;
                    const { chats } = state.chatReducer;
                    const { firstName } = state.profileReducer;
                    const lastMessageId = Number(Object.keys(messages).pop());
                    const messageId = lastMessageId + 1;
                    const sender = chats[chatId].title;

                    const botAction = sendMessage({
                        messageId,
                        chatId,
                        text: `Привет, ${firstName}! Я ${sender}.`,
                        sender: 'bot'
                    });

                    store.dispatch(botAction);
                }, 2000);
            }

            if (sender !== 'me') {
                store.dispatch(markChatUnread(chatId));

                setTimeout(() => {
                    const { pathname } = store.getState().router.location;
                    const { params } = matchPath(pathname, {
                        path: CHAT_PATTERN,
                        exact: true
                    });

                    if (chatId === params.id) {
                        store.dispatch(markChatRead(chatId));
                    }
                }, 1000);
            }
        }
    }
    return next(action);
}
