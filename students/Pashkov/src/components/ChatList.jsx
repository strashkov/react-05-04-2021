import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'




export default class ChatList extends React.Component {

    static propTypes = {
        chats: PropTypes.array.isRequired
    };

    
    render() {
        const { chats } = this.props;
        return (
            <List className="chat-list">
                {chats.map(({ id, text }) => (
                    <Link to={`/chat/${id}`} key={id} className="chat-link">
                        <ListItem button selected={id === this.props.chatId}>
                            <ListItemIcon>
                                <SendIcon fontSize="small" />
                            </ListItemIcon>
                            <Typography variant="inherit" noWrap>
                                {text}
                            </Typography>
                        </ListItem>
                    </Link>
                ))}

            </List>
        );
    }
}
