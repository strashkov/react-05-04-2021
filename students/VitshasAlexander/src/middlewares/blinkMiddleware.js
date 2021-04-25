import { SEND_MESSAGE } from "../actions/messageActions";

export default (store) => (next) => (action) => {
  const { chatId } = action;
  switch (action.type) {
    case SEND_MESSAGE:
      if (action.sender === "robot") {
        console.log(`В чат ${chatId} пришло сообщение от робота`);
      }
  }
  return next(action);
};
