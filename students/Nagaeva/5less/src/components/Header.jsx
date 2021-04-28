import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default class Header extends React.Component {

    static propTypes = {
        chatId: PropTypes.string,
    };

    render() {
        const { chatId, chatText } = this.props;
        return (
            <div className='header'>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                        </IconButton>
                        <Link to={'/'} className="home">
                            Home
                        </Link>
                        <div className="place" >
                            <Typography variant="h6">
                                {chatId === 'profile' ? 'profile' : chatId === undefined ? '' : `Chat ${chatId}`}
                            </Typography>
                        </div>
                        <Link to={'/profile'} className="login">
                            <Button color="inherit">Profile</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
