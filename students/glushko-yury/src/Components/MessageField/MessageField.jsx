import Message from './Message/Message';

const MessageField = ({ messages }) => {
  return (
    <div>
      <Message messages={messages} />
    </div>
  );
};

export default MessageField;
