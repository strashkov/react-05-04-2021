export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = ({ messageId, chatId, text, author }) => ({
    type: SEND_MESSAGE,
    messageId,
    chatId,
    text,
    author,
});
