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
  isActiveChat,
  blinkChat,
  push,
}) => {
  const listEl = chats.map(({ chatId, chatName }) => (
    <div key={chatId} className={style.linkWrapper}>
      <ListItem
        onClick={() => push(`/chat/${chatId}`)}
        button
        selected={currentChat === chatId}
        style={
          chatId === blinkChat && isActiveChat
            ? { backgroundColor: 'rgba(255, 255, 255, 0.5)' }
            : null
        }
      >
        {chatName}
      </ListItem>
      <IconButton
        edge='end'
        aria-label='delete'
        onClick={() => deleteChat(chatId)}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  ));
  const addChatHandler = event => {
    event.preventDefault();
    addChat();
  };
  return (
    <div className={style.chatListWrapper}>
      <div className={style.chatList}>{listEl}</div>
      <form onSubmit={addChatHandler} className={style.form}>
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
