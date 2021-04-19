import React from 'react';
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
    render() {
        return (
            <div className="chat-list">
                <List>
                    {chats.map(({ id, text }) => (
                            <ListItem button key={id}>
                                <div className="chat-list-icon" />
                                <ListItemText primary={text} />
                            </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}
