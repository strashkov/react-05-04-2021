import { useEffect } from 'react';
import style from './MessageField.module.scss';
import Message from './Message/Message';
import { withRouter } from 'react-router';

const MessageField = ({
  chats,
  setCurrentChat,
  messages,
  messageFieldRef,
  match: {
    params: { chatId },
  },
}) => {
  useEffect(() => setCurrentChat(chatId), [setCurrentChat, chatId]);

  if (messages?.length === 0) {
    return (
      <div className={style.messageField}>
        Start chatting now! Enter your message in the form below
      </div>
    );
  }

  if (chats?.length === 0) {
    return (
      <div className={style.messageField}>You need to create a new chat</div>
    );
  }

  {
    return messages ? (
      <div className={style.messageField} ref={messageFieldRef}>
        <Message messages={messages} />
      </div>
    ) : (
      <div className={style.messageField}>You need to select a chat</div>
    );
  }
};

const WithChatIdMessageField = withRouter(MessageField);

export default WithChatIdMessageField;
