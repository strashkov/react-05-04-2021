import React, { useReducer } from "react";
import { AppContext } from "./AppContext";
import AppReducer, { initialState } from "./AppReducer";
import { SET_CHAT_LIST, SET_MESSAGE_LIST } from "./types";

export const AppState = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addChat = (chat) => {
    const id = Object.keys(state.chat_list).length;
    const tempObject = state.chat_list;
    const tempMessageObject = state.messages_list;
    tempObject[id] = chat
    tempMessageObject[id] = []

    dispatch({
      type: SET_CHAT_LIST,
      chat_list: {...tempObject}
    })
    dispatch({
      type: SET_MESSAGE_LIST,
      messages_list: {...tempMessageObject}
    })
  }
  const addMessage = (message, chat_id) => {
    if ([chat_id] in state.messages_list) {
      const tempArray = state.messages_list;
      tempArray[chat_id].push(message);
      dispatch({
        type: SET_MESSAGE_LIST,
        messages_list: {...tempArray}
      })
    } else {
      dispatch({
        type: SET_MESSAGE_LIST,
        messages_list: {...state.messages_list, [chat_id]: message}
      })
    }

  }

  const msgCount = () => {
    const arrayMessages = [];
    Object.keys(state.messages_list).forEach(item => {

      state.messages_list[item].forEach(msg => {
        arrayMessages.push(msg);
      })
    });
    return arrayMessages;
  }

  return (
    <AppContext.Provider
      value={{
        chat_list: state.chat_list,
        messages_list: state.messages_list,
        msgCount: msgCount().filter(item => item.autor === 'User').length,
        myLastMessages: msgCount().filter(item => item.autor === 'User'),
        botLastMessages: msgCount().filter(item => item.autor === 'Bot'),
        addChat,
        addMessage
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
