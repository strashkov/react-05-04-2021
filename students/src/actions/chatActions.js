export const ADD_CHAT = '@@chat/ADD_CHAT';
export const DELETE_CHAT = "@@chat/DELETE_CHAT";
export const MARK_CHAT_UNREAD = '@@chat/MARK_CHAT_UNREAD';
export const MARK_CHAT_READ = '@@chat/MARK_CHAT_READ';

export const addChat = (title) => {
    return {
        type: ADD_CHAT,
        title,
    }
};

export const deleteChat = (chatId, messageList) => {
    return {
        type: DELETE_CHAT,
        chatId,
        messageList,
    };
};

export const markChatUnread = (chatId) => {
    return {
        type: MARK_CHAT_UNREAD,
        chatId,
    }
};

export const markChatRead = (chatId) => {
    return {
        type: MARK_CHAT_READ,
        chatId,
    }
};