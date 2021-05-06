import { SEND_MESSAGE, sendMessage } from '../actions/messageActions';

export default (store) => (next) => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.author === 'me') {
                setTimeout(() => {
                    const { chatId } = action;
                    const state = store.getState();
                    const { messages } = state.messageReducer;
                    const { chats } = state.chatReducer;
                    const { firstName } = state.profileReducer;
                    const messageId = Object.keys(messages).length + 1;
                    const author = chats[chatId].title;

                    const botAction = sendMessage({
                        messageId,
                        chatId,
                        text: `Привет, ${firstName}! Я ${author}.`,
                        author: author,
                    });

                    store.dispatch(botAction);
                }, 1000);
            }
    }
    return next(action);
};
