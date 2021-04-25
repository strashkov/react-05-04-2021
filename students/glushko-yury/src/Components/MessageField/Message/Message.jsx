import PropTypes from 'prop-types';
import style from './Message.module.scss';

const Message = ({ messages, deleteMsg }) => {
  const msgEl = messages.map(msg => (
    <div
      key={msg.id}
      className={style.msg}
      style={
        msg.author === 'bot'
          ? { alignSelf: 'flex-start' }
          : { alignSelf: 'flex-end' }
      }
    >
      <span className={style.author}>{msg.author}: </span>
      {msg.text}
      <span className={style.del} onClick={() => deleteMsg(msg.id)}>
        <i className='fas fa-times-circle'></i>
      </span>
    </div>
  ));

  return msgEl;
};

Message.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
};

export default Message;
