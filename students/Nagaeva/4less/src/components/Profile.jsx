import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';


export default class Profile extends Component {
    static propTypes = {
        chatId: PropTypes.string,
    };
    render() {
        return (
            <Container className="profile">
                <div className="header-profile" display="flex">
                    <Avatar className="avatar">OP</Avatar>
                    <Typography >
                        name: Bla-bla-bla
                    </Typography>
                    <Typography>
                        phone: Bla-bla-bla
                    </Typography>
                    <Typography>
                        email: Bla-bla-bla
                    </Typography>
                </div>
            </Container>
        )
    }
}
