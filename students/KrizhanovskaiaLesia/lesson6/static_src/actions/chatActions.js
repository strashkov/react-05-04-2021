export const ADD_CHAT = "@@chat/ADD_CHAT";
export const GLOW_CHAT = '@@message/GLOW_CHAT';

export const addChat = (title) => ({
  type: ADD_CHAT,
  title,
});

export const glowChat = (chatId) => ({
  type: GLOW_CHAT,
  chatId,
});