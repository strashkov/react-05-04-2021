export const ADD_CHAT = '@@chat/ADD_CHAT';

export const addChat = (title, url) => {
    return {
        type: ADD_CHAT,
        title,
        url
    }
};