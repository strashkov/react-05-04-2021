import React from 'react';
import PropTypes, { object } from 'prop-types';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class ChatList extends React.Component {
    static propTypes = {
        chatId: PropTypes.string,
        chats: PropTypes.object.isRequired,
        onAddChat: PropTypes.func.isRequired
    };

    state = {
        chatName: '',
    };

    handleChatNameChange = (event) => {
        this.setState({
            chatName: event.target.value
        });
    };

    handleAddChatClick = () => {
        this.props.onAddChat(this.state.chatName);
        this.setState({
            chatName: ''
        });
    };

    render() {
        const { chatName } = this.state;
        const { chats } = this.props;
        return (
            <div className="chatList">
                <List>
                    {Object.entries(chats).map(([id, value]) => (
                        <Link className="chatName" key={id} to={`/chat/${id}`}>
                            <ListItem button selected={id === this.props.chatId}>
                                <div className="chat-list-icon" />
                                <ListItemText primary={value.title} />
                            </ListItem>
                        </Link>
                    ))}
                    <ListItem>
                        <TextField
                            value={chatName}
                            onChange={this.handleChatNameChange}
                            placeholder="Новый чат" />
                        <IconButton
                            onClick={this.handleAddChatClick}
                            disabled={!chatName}>
                            <SendIcon />
                        </IconButton>
                    </ListItem>
                </List>
            </div>
        );
    }
}



