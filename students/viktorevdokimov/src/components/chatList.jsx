import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import PropTypes from 'prop-types';

export default class ChatList extends React.Component {
    static propTypes = {
        chats: PropTypes.object.isRequired,
    };
    
    render() {
        const { chats } = this.props;
        const chatElements = Object.keys(chats).map(chatId => (
            <Link key={ chatId } to={ `/chat/${chatId}` }>
                <ListItem
                    primaryText={ chats[chatId].title }
                    leftAvatar={<Avatar icon={<FileFolder />} />} />
            </Link>));

        return (
            <List className="chatList">
                { chatElements }
            </List>
        )
    }
}