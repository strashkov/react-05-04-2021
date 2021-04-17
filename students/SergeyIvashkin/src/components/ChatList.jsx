import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChatIcon from '@material-ui/icons/Chat';



export default class ChatList extends React.Component {


    render() {
        return (
            <div className="chat-list">

                <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                        <ListItemIcon>
                            <ChatIcon />
                        </ListItemIcon>
                        <ListItemText primary="Чат 1"
                        />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <ChatIcon />
                        </ListItemIcon>
                        <ListItemText primary="Чат 2"
                        />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <ChatIcon />
                        </ListItemIcon>
                        <ListItemText primary="Чат 3"
                        />
                    </ListItem>

                </List>

            </div>
        )
    }

}