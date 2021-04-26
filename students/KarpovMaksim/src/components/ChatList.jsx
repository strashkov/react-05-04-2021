import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';



export default class ChatList extends React.Component {
  static propTypes = {
    chatId: PropTypes.string,
    chats: PropTypes.object.isRequired,
    onAddChat: PropTypes.func.isRequired
  };

  state = {
    chatName: ''
  }

  handlerChatNameChange = (event) => {
    this.setState({
      chatName: event.target.value
    });
  };

  hadlerAddChatClick = () => {
    this.props.onAddChat(this.state.chatName);
    this.setState( {
        chatName: ''
      }
    );
  };
  render() {
    const { chatName } = this.state;
    const { chats } = this.props;
    return (
      <div className="chat-list-field">
        <List>
        {Object.entries(chats).map(([id, value]) => (
          <Link key={id} to={`/chat/${id}/${value.them}`}>
            <ListItem button selected={id === this.props.chatId}>
              <div className='chat-list-icon'></div>
              <ListItemText primary={value.chat}/>
            </ListItem>
          </Link>
          ))}
          <ListItem button >
            <TextField 
              value={chatName}
              placeholder='Enter new chat name' 
              onChange={this.handlerChatNameChange}/>
            <IconButton
              onClick={this.hadlerAddChatClick}
              disabled={!chatName}>
              <SendIcon />
            </IconButton>
          </ListItem>
        </List>
     
      </div>
    )
  }
}