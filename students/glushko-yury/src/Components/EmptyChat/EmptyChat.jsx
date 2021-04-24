import style from './EmptyChat.module.scss';

const EmptyChat = ({ chats }) => {
  if (chats.length > 0) {
    return <div className={style.messageField}>You need to select a chat</div>;
  }
  return (
    <div className={style.messageField}>You need to create a new chat</div>
  );
};

export default EmptyChat;
