export const SEND_MESSAGE = "@@message/SEND_MESSAGE";

export const sendMessage = (message, sender, messageId, chatId) => ({
  type: SEND_MESSAGE,
  message,
  sender,
  messageId,
  chatId,
});
