import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';

export default class ChatList extends React.Component {
    render() {
        return (
            <List>
                <ListItem button>
                    <ListItemText primary="CHAT 1" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="CHAT 2" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="CHAT 3" />
                </ListItem>
            </List>
        )
    }
}