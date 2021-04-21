import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import '../styles/style.css';

const chats = [
    {
        id: '1',
        text: 'Chat 1'
    },
    {
        id: '2',
        text: 'Chat 2'
    },
    {
        id: '3',
        text: 'Chat 3'
    }
];

export default class ChatList extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    };

    render() {
        return (
            <div className="chat-list">
                <List>
                    {chats.map(({ id, text }) => (
                        <Link key={id} to={`/chat/${id}`}>
                            <ListItem button selected={id === this.props.chatId}>
                                <div className="chat-list-icon" />
                                <ListItemText primary={text} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </div>
        );
    }
}