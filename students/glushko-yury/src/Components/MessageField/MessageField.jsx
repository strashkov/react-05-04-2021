import PropTypes from 'prop-types';
import { useEffect } from 'react';
import style from './MessageField.module.scss';
import Message from './Message/Message';
import { withRouter } from 'react-router';
import SendingFormContainer from './SendingForm/SendingFormContainer';
import Loader from '../common/Loader/Loader';

const MessageField = ({
  deleteMsgAPI,
  isLoading,
  chats,
  setCurrentChat,
  messageFieldRef,
  match: {
    params: { chatId },
  },
}) => {
  const currentMessages = chats[chatId - 1]?.messages;
  useEffect(() => setCurrentChat(chatId), [setCurrentChat, chatId]);

  if (isLoading) return <Loader />;

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
          <Message messages={currentMessages} deleteMsgAPI={deleteMsgAPI} />
        </div>
        <SendingFormContainer />
      </div>
    ) : (
      <div className={style.messageField}>You need to select a chat</div>
    );
  }
};

MessageField.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      chatId: PropTypes.string,
      chatName: PropTypes.string,
      messages: PropTypes.arrayOf(
        PropTypes.shape({
          author: PropTypes.string,
          id: PropTypes.number,
          text: PropTypes.string,
        })
      ),
    })
  ),
  messageFieldRef: PropTypes.object,
  isLoading: PropTypes.bool,
  chatId: PropTypes.string,
  deleteMsgAPI: PropTypes.func,
  setCurrentChat: PropTypes.func,
};

const WithChatIdMessageField = withRouter(MessageField);

export default WithChatIdMessageField;
