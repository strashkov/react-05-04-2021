import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';



export default class ChatList extends React.Component {

    render() {
        return (
            <MenuList className="chat-list">
                
                <MenuItem>
                    <ListItemIcon>
                        <SendIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Чат 1</Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <SendIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit" noWrap>
                        Чат 2
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <SendIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit" noWrap>
                        Чат 3
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <SendIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit" noWrap>
                        Чат 4
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <SendIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit" noWrap>
                        Чат 5
                    </Typography>
                </MenuItem>
            </MenuList>
        );
    }
}
