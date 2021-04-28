export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (messageId, chatId) => ({
    type: SEND_MESSAGE,
    messageId,
    chatId,
});
