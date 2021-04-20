import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import style from './ChatList.module.scss';

const ChatList = ({
  chats,
  addChatInputValue,
  updateAddChatInputValue,
  addChat,
  deleteChat,
  currentChat,
}) => {
  const listEl = chats.map(({ chatId, chatName }) => (
    <div key={chatId} className={style.linkWrapper}>
      <Link to={`/chat/${chatId}`} className={style.link}>
        <ListItem button selected={currentChat === chatId}>
          {chatName}
        </ListItem>
      </Link>
      <IconButton
        edge='end'
        aria-label='delete'
        onClick={() => deleteChat(chatId)}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  ));
  return (
    <div className={style.chatListWrapper}>
      <div className={style.chatList}>{listEl}</div>
      <form onSubmit={event => addChat(event)} className={style.form}>
        <TextField
          id='standard-basic'
          label='add new chat'
          value={addChatInputValue}
          onChange={e => updateAddChatInputValue(e.target.value)}
        />
        <Fab
          color='primary'
          aria-label='add'
          disabled={!addChatInputValue}
          type='submit'
        >
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
};

export default ChatList;
