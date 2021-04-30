export const ADD_CHAT = '@@chat/ADD_CHAT';

// функция action creator
export const addChat = (title) => {
    return {
        type: ADD_CHAT,
        title
    }
};