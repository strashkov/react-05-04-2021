import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import '../styles/style.css';

export default class ChatList extends React.Component {
    static propTypes = {
        chatId: PropTypes.string,
        chats: PropTypes.object.isRequired
    };

    render() {
        const { chats } = this.props;

        return (
            <div className="chat-list">
                <List>
                    {Object.entries(chats).map(([id, value]) => (
                        <Link key={id} to={`/chat/${id}`}>
                            <ListItem button selected={id === this.props.chatId}>
                                <div className="chat-list-icon" />
                                <ListItemText primary={value.title} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </div>
        );
    }
}
