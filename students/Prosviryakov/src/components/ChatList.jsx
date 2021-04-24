import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export default class ChatList extends React.Component {
    static propTypes = {
        chatId: PropTypes.string,
        chats: PropTypes.array,
    };

    render() {
        return (
            <div className="chat-list">
                <List>
                    {chats.map(({ id, text }) => (
                        <Link key={id} to={`/chat/${id}`}>
                            <ListItem button selected={id === this.props.chatId}>
                                <ListItemIcon>
                                    <AccountCircleIcon fontSize="AccountCircleIcon" class="icon" />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </div>
        );
    }
}