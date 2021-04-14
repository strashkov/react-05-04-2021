import style from './MessageField.module.scss';
import Message from './Message/Message';

const MessageField = ({ messages, messageFieldRef }) => {
  return (
    <div className={style.messageField} ref={messageFieldRef}>
      <Message messages={messages} />
    </div>
  );
};

export default MessageField;
