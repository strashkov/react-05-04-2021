import { Link } from 'react-router-dom';
import style from './Header.module.scss';

export const Header = ({ chats, currentChat }) => {
  if (chats.length === 0) {
    return (
      <div className={style.header}>
        <div className={style.chat}>No chats</div>
        <Link to={'/profile'}>Profile</Link>
      </div>
    );
  }

  const chat = chats.find(({ chatId }) => chatId === currentChat)?.chatName;
  return (
    <div className={style.header}>
      <div className={style.chat}>{chat ? chat : 'No chat selected'}</div>
      <Link to={'/profile'}>Profile</Link>
    </div>
  );
};

export default Header;
