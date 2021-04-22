import React from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
=======
>>>>>>> a9c2efd348244b4816e9f1a9d1d00f0c9269334b
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
<<<<<<< HEAD
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

export default class ChatList extends React.Component { 
  static propTypes = {
    chatId: PropTypes.string,
    chats: PropTypes.object.isRequired,
    addChat: PropTypes.func.isRequired
};

state = { 
  chatName: ''
};

handleChatNameChange = (event) => {
  this.setState({
    chatName: event.target.value
  });
};

handleAddChatClick = () => {
  this.props.onAddChat(this.state.chatName);
  this.setState({
      chatName:''  
  });
};
      
    render() {
      const { chatName } = this.state;
      const { chats } = this.props;

        return (
            <div className="chatlist" >
              <List component="nav" aria-label="main mailbox folders">
                {Object.entries(chats).map(([id,value]) => (
                  <Link key={id} to={`/chat/${id}`}>                
                <ListItem button selected={id === this.props.chatId} >
                  <ListItemIcon>
                    <ChevronRightIcon />
                  </ListItemIcon>
                  <ListItemText primary={value.title} />
                </ListItem>
                </Link> 
                ))} 
                <ListItem>                  
                    <TextField 
                    value={chatName}
                    onChange={this.handleChatNameChange}
                    />
                    <IconButton 
                    disabled={!chatName}
                    onClick={this.handleAddChatClick}
                    >
                      <SendIcon/>
                    </IconButton>
                </ListItem>               
              </List>              
=======
import Divider from '@material-ui/core/Divider';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default class ChatList extends React.Component { 

      
    render() {
        return (
            <div className="chatlist" >
              <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                  <ListItemIcon>
                    <ChevronRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Me" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <ChevronRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Robot" />
                </ListItem>
              </List>
              <Divider />
              <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                  <ListItemText primary="Settings" />
                </ListItem>                
              </List>
>>>>>>> a9c2efd348244b4816e9f1a9d1d00f0c9269334b
            </div>
          );

    }
}