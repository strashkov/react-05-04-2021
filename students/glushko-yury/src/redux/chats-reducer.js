const UPDATE_ADD_CHAT_INPUT_VALUE = 'chatList/UPDATE_ADD_CHAT_INPUT_VALUE';
const DELETE_CHAT = 'chatList/DELETE_CHAT';
const ADD_CHAT = 'chatList/ADD_CHAT';
const UPDATE_INPUT_VALUE = 'sendingForm/UPDATE_INPUT_VALUE';
const UPDATE_MESSAGES_DATA = 'sendingForm/UPDATE_MESSAGES_DATA';
const SET_CURRENT_CHAT = '/messageField/SET_CURRENT_CHAT';

const initalState = {
  addChatInputValue: '',
  inputValue: '',
  currentChat: '',
  chats: [
    {
      chatId: '1',
      chatName: 'Chat 1',
      messages: [
        { id: 1, author: 'bot', text: 'Lorem' },
        { id: 2, author: 'bot', text: 'Ipsum' },
      ],
    },
    {
      chatId: '2',
      chatName: 'Chat 2',
      messages: [
        { id: 1, author: 'bot', text: 'Chat 2' },
        { id: 2, author: 'bot', text: 'Ipsum' },
      ],
    },
    {
      chatId: '3',
      chatName: 'Chat 3',
      messages: [
        { id: 1, author: 'bot', text: 'Chat 3' },
        { id: 2, author: 'bot', text: 'Ipsum' },
      ],
    },
  ],
};

const chatsReducer = (state = initalState, action) => {
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
      const idx = state.currentChat - 1;
      let newMsg = {};
      let msg = '';
      if (action.author === 'me') {
        msg = state.inputValue;
        newMsg = {
          id: state.chats[idx].messages.length + 1,
          author: action.author,
          text: msg,
        };
        return {
          ...state,
          chats: state.chats.map(chat => {
            return chat.chatId === state.currentChat
              ? { ...chat, messages: [...chat.messages, newMsg] }
              : chat;
          }),
          inputValue: '',
        };
      } else {
        newMsg = {
          id: state.chats[idx].messages.length + 1,
          author: action.author,
          text: 'Я робот',
        };
        return {
          ...state,
          chats: state.chats.map(chat => {
            return chat.chatId === state.currentChat
              ? { ...chat, messages: [...chat.messages, newMsg] }
              : chat;
          }),
        };
      }

    case SET_CURRENT_CHAT:
      return {
        ...state,
        currentChat: action.routerChatId,
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

export const updateMessagesData = author => ({
  type: UPDATE_MESSAGES_DATA,
  author,
});

export const setCurrentChat = routerChatId => ({
  type: SET_CURRENT_CHAT,
  routerChatId,
});

export default chatsReducer;
