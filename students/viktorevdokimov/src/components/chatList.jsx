import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';

export default class ChatList extends React.Component {
    render() {
        return (
            <List>
                
                    <ListItem
                        primaryText="Chat 1"
                        leftAvatar={<Avatar icon={<FileFolder />} />}
                    />
                    <ListItem
                        primaryText="Chat 2"
                        leftAvatar={<Avatar icon={<FileFolder />} />}
                    />
                    <ListItem
                        primaryText="Chat 3"
                        leftAvatar={<Avatar icon={<FileFolder />} />}
                    />
                </List>
        )
    }
}