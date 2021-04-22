import { useEffect } from 'react';
import style from './MessageField.module.scss';
import Message from './Message/Message';
import { withRouter } from 'react-router';
import SendingFormContainer from './SendingForm/SendingFormContainer';

const MessageField = ({
  chats,
  setCurrentChat,
  messageFieldRef,
  match: {
    params: { chatId },
  },
}) => {
  const currentMessages = chats[chatId - 1]?.messages;
  useEffect(() => setCurrentChat(chatId), [setCurrentChat, chatId]);

  if (currentMessages?.length === 0) {
    return (
      <div className={style.messageFieldWrapper}>
        <div className={style.messageField}>
          Start chatting now! Enter your message in the form below
        </div>
        <SendingFormContainer />
      </div>
    );
  }

  if (chats?.length === 0) {
    return (
      <div className={style.messageField}>You need to create a new chat</div>
    );
  }

  {
    return currentMessages ? (
      <div className={style.messageFieldWrapper}>
        <div className={style.messageField} ref={messageFieldRef}>
          <Message messages={currentMessages} />
        </div>
        <SendingFormContainer />
      </div>
    ) : (
      <div className={style.messageField}>You need to select a chat</div>
    );
  }
};

const WithChatIdMessageField = withRouter(MessageField);

export default WithChatIdMessageField;
