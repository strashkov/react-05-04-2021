export const ADD_CHAT = '@@chat/ADD_CHAT';

export const addChat = (title, chatMessageListId) => {
  return {
    type: ADD_CHAT,
    title,
    chatMessageListId
  }
};