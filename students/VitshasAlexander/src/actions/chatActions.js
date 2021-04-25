export const ADD_CHAT = "@@chat/ADD_CHAT";
export const DELETE_CHAT = "@@chat/DELETE_CHAT";

export const addChat = (title) => {
  return {
    type: ADD_CHAT,
    title,
  };
};

export const deleteChat = (chatId, messageList) => {
  return {
    type: DELETE_CHAT,
    chatId,
    messageList,
  };
};
