import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';



export default class ChatList extends React.Component {

    render() {
        return (
            <MenuList className="chat-list">
                <MenuItem>
                    <ListItemIcon>
                        <AccountCircleIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="secondary">Kate</Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <AccountCircleIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="secondary" noWrap>
                        Leha
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <AccountCircleIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="secondary" noWrap>
                        James
                    </Typography>
                </MenuItem>
            </MenuList>
        );
    }
}