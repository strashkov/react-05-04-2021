export const ADD_CHAT = "@@chat/ADD_CHAT";
export const SEND_MESSAGE = "@@message/SEND_MESSAGE";
export const ENABLE_CHAT_HIGHLIGHT = "@@chat/ENABLE_CHAT_HIGHLIGHT";
export const DISABLE_CHAT_HIGHLIGHT = "@@chat/DISABLE_CHAT_HIGHLIGHT";

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

export const enableChatHighlight = (chatId) => ({
  type: ENABLE_CHAT_HIGHLIGHT,
  chatId,
});

export const disableChatHighlight = (chatId) => ({
  type: DISABLE_CHAT_HIGHLIGHT,
  chatId,
});
