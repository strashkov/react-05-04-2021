export const SEND_MESSAGE = '@@message/SEND_MESSAGE';
export const DELETE_MESSAGE = '@@message/DELETE_MESSAGE';

export const sendMessage = (messageId, chatId, text, sender) => ({
    type: SEND_MESSAGE,
    messageId,
    chatId,
    text,
    sender
});

export const deleteMessage = ({ messageId, chatId }) => ({
    type: DELETE_MESSAGE,
    messageId,
    chatId
});