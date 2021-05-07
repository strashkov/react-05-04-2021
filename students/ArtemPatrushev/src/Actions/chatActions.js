export const ADD_CHAT = '@@chat/ADD_CHAT';
export const MARK_CHAT_READ = '@@chat/MARK_CHAT_READ';
export const MARK_CHAT_UNREAD = '@@chat/MARK_CHAT_UNREAD';

// функция action creator
export const addChat = (title) => {
    return {
        type: ADD_CHAT,
        title
    }
};

export const markChatRead = (chatId) => {
    return {
        type: MARK_CHAT_READ,
        chatId
    }
};

export const markChatUnread = (chatId) => {
    return {
        type: MARK_CHAT_UNREAD,
        chatId
    }
};