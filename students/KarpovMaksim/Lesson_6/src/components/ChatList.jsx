import React from 'react';
import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import { connect } from 'react-redux';
import { addChat } from '../actions/chatActions';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../actions/messageActions';


class ChatList extends React.Component {
  static propTypes = {
    chatId: PropTypes.string,
    chats: PropTypes.object.isRequired,
    addChat: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired

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
    this.props.addChat(this.state.chatName, 1);
    
    this.setState( {
        chatName: ''
      }
    );
  };

  handleNavigate = (link) => {
    this.props.push(link);
  };

  render() {
    const { chatName } = this.state;
    const { chats } = this.props;
    return (
      <div className="chat-list-field">
        <List>
        {Object.entries(chats).map(([id, value]) => (
            <ListItem key={id} button selected={id === this.props.chatId} onClick={ () => this.handleNavigate(`/chat/${id}`) }>
              <div className='chat-list-icon'></div>
              <ListItemText primary={value.title}/>
            </ListItem>
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

const mapStateToProps = (store) => ({
  chats: store.chatReducer.chats,
});
const mapDispatchToProps = dispatch => bindActionCreators({ addChat, sendMessage, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);