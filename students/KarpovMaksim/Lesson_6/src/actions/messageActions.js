export const SEND_MESSAGE = '@@chat/SEND_MESSAGE';

export const sendMessage = (messageId, text, userName, chatId) => {
  return {
    type: SEND_MESSAGE,
    messageId,
    text,
    userName,
    chatId
  }
};