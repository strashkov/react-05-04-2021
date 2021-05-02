export const ADD_CHAT = '@@chat/ADD_CHAT';
export const DELETE_CHAT = '@@chat/DELETE_CHAT';

export const addChat = (title, chatMessageListId) => {
  return {
    type: ADD_CHAT,
    title,
    chatMessageListId
  }
};

export const deleteChat = (chatId) => {
  return {
    type: DELETE_CHAT,
    chatId
  }
};