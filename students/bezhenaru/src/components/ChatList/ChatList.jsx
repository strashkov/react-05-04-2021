import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './chatlist.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Avatar from '@material-ui/core/Avatar';


export default class ChatList extends React.Component {
    static propTypes = {
        chatId: PropTypes.string,
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired
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
        this.props.addChat(this.state.chatName);

        this.setState({
            chatName: ''
        });
    };

    handleLinkClick = (link) => {
        this.props.push(link);
    };

    render() {
        const { chatName } = this.state;
        const { chats } = this.props;

        return (
            <div className="chat-list">
            <List>
                {Object.entries(chats).map(([id, value]) => (
                    <ListItem
                        key={id}
                        button
                        selected={id === this.props.chatId}
                        onClick={() => { this.handleLinkClick(`/chat/${id}`) }}>
                        <Avatar className='chat-list-avatar'>
                            {value.title.split(' ').map(w => w.charAt(0))}
                        </Avatar>
                        <ListItemText primary={value.title}/>
                    </ListItem>
                ))}
                <ListItem>
                    <TextField
                        value={chatName}
                        onChange={this.handleChatNameChange} />
                    <IconButton
                        disabled={!chatName}
                        onClick={this.handleAddChatClick}>
                        <AddIcon />
                    </IconButton>
                </ListItem>
            </List>
        </div>
        );
    }
}
