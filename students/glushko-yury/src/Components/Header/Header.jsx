import { Link } from 'react-router-dom';
import style from './Header.module.scss';

export const Header = ({ chats, currentChat, userName }) => {
  if (chats.length === 0) {
    return (
      <div className={style.header}>
        <div className={style.chat}>No chats</div>
        <Link to={'/profile'}>Profile ({userName})</Link>
      </div>
    );
  }
  const chatName = chats.find(({ chatId }) => chatId === currentChat)?.chatName;
  return (
    <div className={style.header}>
      <div className={style.chat}>
        {chatName ? chatName : 'No chat selected'}
      </div>
      <Link to={'/profile'}>Profile ({userName})</Link>
    </div>
  );
};

export default Header;
