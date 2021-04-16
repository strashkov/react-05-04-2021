import ListItem from '@material-ui/core/ListItem';
import style from './ChatList.module.scss';

export const ChatList = () => {
  return (
    <div className={style.chatList}>
      <ListItem button>ChatList</ListItem>
      <ListItem button>ChatList</ListItem>
      <ListItem button>ChatList</ListItem>
    </div>
  );
};

export default ChatList;
