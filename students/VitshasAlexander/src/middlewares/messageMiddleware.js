import { SEND_MESSAGE, sendMessage } from "../actions/messageActions";
import { markChatUnread, markChatRead } from "../actions/chatActions";
import { matchPath } from "react-router-dom";
import { CHAT_PATTERN } from "../constants";

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      const { chatId, sender } = action;

      if (action.sender === "human") {
        setTimeout(() => {
          const state = store.getState();
          const { messages } = state.messageReducer;
          const { chats } = state.chatReducer;
          const { user } = state.profileReducer;
          const { answers } = state.answersReducer;
          const lastMessageId = Number(Object.keys(messages).pop());
          const messageId = lastMessageId + 1;
          const sender = chats[chatId].title;
          const userId = Number(Object.keys(user).pop());
          const randomAnswer = Math.floor(
            Math.random() * Object.keys(answers).length + 1
          );

          const botAction = sendMessage({
            messageId,
            chatId,
            text: `${user[userId]?.firstName}! ${answers[randomAnswer].text} Я ${sender}.`,
            sender: "robot",
          });

          store.dispatch(botAction);
        }, 1000);
      }
      if (sender !== "human") {
        store.dispatch(markChatUnread(chatId));

        setTimeout(() => {
          const { pathname } = store.getState().router.location;
          const { params } = matchPath(pathname, {
            path: CHAT_PATTERN,
            exact: true,
          });

          if (chatId === params.id) {
            store.dispatch(markChatRead(chatId));
          }
        }, 1000);
      }
    }
  }
  return next(action);
};
