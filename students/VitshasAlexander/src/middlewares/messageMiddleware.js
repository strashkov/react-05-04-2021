import { SEND_MESSAGE, sendMessage } from "../actions/messageActions";

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      if (action.sender === "human") {
        setTimeout(() => {
          const { chatId } = action;
          const state = store.getState();
          const { messages } = state.messageReducer;
          const { chats } = state.chatReducer;
          const { user } = state.profileReducer;
          const { answers } = state.answersReducer;
          const messageId = Object.keys(messages).length + 1;
          const sender = chats[chatId].title;

          const randomAnswer = Math.floor(
            Math.random() * Object.keys(answers).length + 1
          );
          console.log(randomAnswer);

          const botAction = sendMessage({
            messageId,
            chatId,
            text: `${user.firstName}! ${answers[randomAnswer].text} Я ${sender}.`,
            sender: "robot",
          });

          store.dispatch(botAction);
        }, 1000);
      }
  }
  return next(action);
};
