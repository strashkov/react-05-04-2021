import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Add';
import '../styles/style.css';

export default class ChatList extends React.Component {
    static propTypes = {
        chatId: PropTypes.string,
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired
    };

    state = {
        chatName: '',
        urlName: 'https://www.kino-teatr.ru/acter/album/82196/pv_1021322.jpg'
    };

    handleChatNameChange = (event) => {
        this.setState({
            chatName: event.target.value,
            urlName: this.state.urlName
        });
    };

    handleAddChatClick = () => {
        this.props.addChat(this.state.chatName, this.state.urlName);
        this.setState({
            chatName: '',
        });
    };
    handleLinkClick = (link) => {
        this.props.push(link);
    };
    render() {
        const chatName = this.state.chatName;
        const chats = this.props.chats;

        return (
            <div className="chat-list">
                <List>
                    {Object.entries(chats).map(([id, value]) => (
                            <ListItem
                                key={id}
                                onClick={() => { this.handleLinkClick(`/chat/${id}`) }}
                                button selected={id === this.props.chatId}>
                                <div className='chat-list-avatar'>
                                    <img src={value.url} alt=""/>
                                </div>
                                <ListItemText primary={value.title}/>
                            </ListItem>
                    ))}
                    <ListItem>
                        <TextField
                            value={chatName}
                            onChange={this.handleChatNameChange}/>
                        <IconButton
                            disabled={!chatName}
                            onClick={this.handleAddChatClick}>
                            <SendIcon/>
                        </IconButton>
                    </ListItem>
                </List>
            </div>
        );
    }
}