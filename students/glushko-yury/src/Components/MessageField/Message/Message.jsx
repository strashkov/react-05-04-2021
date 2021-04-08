import PropTypes from 'prop-types';

const Message = ({ messages }) => {
  const msgEl = messages.map(msg => (
    <div key={msg.id}>
      {msg.text} ({msg.user})
    </div>
  ));

  return msgEl;
};

Message.propTypes = {
  messages: PropTypes.array,
};

export default Message;
