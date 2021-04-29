import { matchPath } from 'react-router';
import { chatsAPI } from '../api/api';

const UPDATE_ADD_CHAT_INPUT_VALUE = 'chatList/UPDATE_ADD_CHAT_INPUT_VALUE';
const DELETE_CHAT = 'chatList/DELETE_CHAT';
const ADD_CHAT = 'chatList/ADD_CHAT';
const UPDATE_INPUT_VALUE = 'sendingForm/UPDATE_INPUT_VALUE';
const UPDATE_MESSAGES_DATA = 'sendingForm/UPDATE_MESSAGES_DATA';
const SET_CURRENT_CHAT = 'messageField/SET_CURRENT_CHAT';
const MARK_CHAT_UNREAD = 'chatList/MARK_CHAT_UNREAD';
const MARK_CHAT_READ = 'chatList/MARK_CHAT_READ';
const DELETE_MSG = 'messageField/DELETE_MSG';
const LOAD_CHATS = 'LOAD_CHATS';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

const initalState = {
  isLoading: false,
  addChatInputValue: '',
  inputValue: '',
  currentChat: '',
  isMarkChat: [],
  chats: [],
};

const chatsReducer = (state = initalState, action) => {
  let idx;
  switch (action.type) {
    case UPDATE_ADD_CHAT_INPUT_VALUE:
      return {
        ...state,
        addChatInputValue: action.inputValue,
      };

    case DELETE_CHAT:
      let newChats = state.chats;
      newChats.splice(action.chatId - 1, 1);
      newChats = newChats.map((chat, idx) =>
        chat.chatId === idx + 1 ? chat : { ...chat, chatId: String(idx + 1) }
      );
      return {
        ...state,
        chats: newChats,
      };

    case ADD_CHAT:
      const chatName = state.addChatInputValue;
      const newChat = {
        chatId: String(state.chats.length + 1),
        chatName: chatName,
        messages: [],
      };
      return {
        ...state,
        chats: [...state.chats, newChat],
        addChatInputValue: '',
      };

    case UPDATE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.text,
      };

    case UPDATE_MESSAGES_DATA:
      idx = action.currentChat - 1;
      const newMsg = {
        id:
          state.chats[idx].messages.length > 0
            ? state.chats[idx].messages[state.chats[idx].messages.length - 1]
                .id + 1
            : 1,
        author: action.author,
        text: action.author === 'me' ? state.inputValue : 'Я робот',
      };
      return {
        ...state,
        chats: state.chats.map(chat => {
          return chat.chatId === action.currentChat
            ? { ...chat, messages: [...chat.messages, newMsg] }
            : chat;
        }),
        inputValue: '',
      };

    case SET_CURRENT_CHAT:
      return {
        ...state,
        currentChat: action.routerChatId,
      };

    case MARK_CHAT_UNREAD:
      return {
        ...state,
        isMarkChat: [...state.isMarkChat, ...action.chatId],
      };

    case MARK_CHAT_READ:
      return {
        ...state,
        isMarkChat: state.isMarkChat.filter(id => id !== action.chatId),
      };

    case DELETE_MSG:
      idx = state.currentChat - 1;
      const newMsgs = [...state.chats[idx].messages];
      const msgIdx = newMsgs.findIndex(msg => msg.id === action.msgId);
      newMsgs.splice(msgIdx, 1);
      return {
        ...state,
        chats: state.chats.map(chat => {
          return chat.chatId === state.currentChat
            ? { ...chat, messages: newMsgs }
            : chat;
        }),
        inputValue: '',
      };

    case LOAD_CHATS:
      return {
        ...state,
        chats: action.fetchChats,
      };

    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    default:
      return state;
  }
};

export const updateAddChatInputValue = inputValue => ({
  type: UPDATE_ADD_CHAT_INPUT_VALUE,
  inputValue,
});

export const deleteChat = chatId => ({
  type: DELETE_CHAT,
  chatId,
});

export const addChat = () => ({
  type: ADD_CHAT,
});

export const updateInputValue = text => ({
  type: UPDATE_INPUT_VALUE,
  text,
});

export const updateMessagesData = (author, currentChat) => ({
  type: UPDATE_MESSAGES_DATA,
  author,
  currentChat,
});

export const setCurrentChat = routerChatId => ({
  type: SET_CURRENT_CHAT,
  routerChatId,
});

export const markChatUnread = chatId => ({
  type: MARK_CHAT_UNREAD,
  chatId,
});

export const markChatRead = chatId => ({
  type: MARK_CHAT_READ,
  chatId,
});

export const deleteMsg = msgId => ({
  type: DELETE_MSG,
  msgId,
});

export const loadChats = fetchChats => ({
  type: LOAD_CHATS,
  fetchChats,
});

export const toggleIsLoading = isLoading => ({
  type: TOGGLE_IS_LOADING,
  isLoading,
});

export const messagesDidUpadte = author => {
  return (dispatch, getState) => {
    let currentChat = getState().messenger.currentChat;
    dispatch(updateMessagesData(author, currentChat));

    setTimeout(() => {
      const { pathname } = getState().router.location;
      const {
        params: { id },
      } = matchPath(pathname, {
        path: '/chat/:id',
        exact: true,
      });
      dispatch(updateMessagesData('bot', currentChat));
      dispatch(markChatUnread(currentChat));
      if (id === currentChat) {
        setTimeout(() => {
          dispatch(markChatRead(currentChat));
        }, 1000);
      }
      const newChats = getState().messenger.chats;
      chatsAPI.uploadChats(newChats);
    }, 1000);
  };
};

export const getChatsAPI = () => {
  return dispatch => {
    dispatch(toggleIsLoading(true));
    chatsAPI.loadChats().then(data => {
      if (data) {
        dispatch(loadChats(data));
      }
      dispatch(toggleIsLoading(false));
    });
  };
};

export const deleteChatAPI = chatId => {
  return (dispatch, getState) => {
    dispatch(deleteChat(chatId));
    const newChats = getState().messenger.chats;
    chatsAPI.uploadChats(newChats);
  };
};

export const addChatAPI = () => {
  return (dispatch, getState) => {
    dispatch(addChat());
    const newChats = getState().messenger.chats;
    chatsAPI.uploadChats(newChats);
  };
};

export const deleteMsgAPI = msgId => {
  return (dispatch, getState) => {
    dispatch(deleteMsg(msgId));
    const newChats = getState().messenger.chats;
    chatsAPI.uploadChats(newChats);
  };
};

export default chatsReducer;
