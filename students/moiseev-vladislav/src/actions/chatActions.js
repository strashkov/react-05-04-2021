export const ADD_CHAT = "@@chat/ADD_CHAT";
export const SEND_MESSAGE = "@@message/SEND_MESSAGE";

export const addChat = (title) => ({
  type: ADD_CHAT,
  title,
});

export const sendMessage = (chatId, text, sender) => ({
  type: SEND_MESSAGE,
  chatId,
  text,
  sender,
});
