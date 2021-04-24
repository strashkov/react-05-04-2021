import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import List from '@material-ui/core/List';
import {IconButton, ListItem, TextField} from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import './styles/style.css';
import SendIcon from '@material-ui/icons/Send';

export default class ChatList extends React.Component {
    static propTypes = {
        chatId: PropTypes.string,
        chats: PropTypes.object.isRequired,
        onAddChat: PropTypes.func.isRequired,
    };
    state = {
        newChat: ''
    }
    handleChatNameChange = (event) => {
        this.setState({
            newChat: event.target.value
        })
    }
    handleAddChatClick = () => {
        this.props.onAddChat(this.state.newChat)
        this.setState({
            newChat: ''
        })
    }

    render() {
        const chats = this.props.chats
        const newChat = this.state.newChat
        return (
            <div className="chat-list">
                <List>
                    <ListItem button>
                        <TextField
                            value={newChat}
                            onChange={this.handleChatNameChange}/>
                        <IconButton onClick={this.handleAddChatClick} disabled={!newChat}>
                            <SendIcon/>
                        </IconButton>
                    </ListItem>
                    {Object.entries(chats).map(([id, value]) => (
                        <Link key={id} to={`/chat/${id}`}>
                            <ListItem button selected={id === this.props.chatId}>
                                <div className="chat-list-icon"/>
                                <ListItemText primary={value.title}/>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </div>
        );
    }
}