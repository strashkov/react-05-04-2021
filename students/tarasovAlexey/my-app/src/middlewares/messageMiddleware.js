import { SEND_MESSAGE, sendMessage } from "../actions/messageActions";

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.sender === 'me') {
                setTimeout(() => {
                    const chatId  = action.chatId;
                    const state = store.getState();
                    const messages = state.messageReducer.messages;
                    const chats = state.chatReducer.chats;
                    const firstName = state.profileReducer.firstName;
                    const messageId = Object.keys(messages).length + 1;
                    const sender = chats[chatId].title;
                    const botAnswer = sendMessage({
                        messageId,
                        chatId,
                        text: `Hi, ${firstName}! I'm ${sender}, nice to meet you:-)`,
                        sender: 'bot'
                    });

                    store.dispatch(botAnswer);
                }, 1000);
            }
    }
    return next(action);
}