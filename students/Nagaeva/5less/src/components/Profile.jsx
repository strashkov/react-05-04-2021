import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


export default class Profile extends Component {
    static propTypes = {
        chatId: PropTypes.string,
    };
    render() {
        return (
            <Container className="profile">
                <div className="header-profile" display="flex">
                    <Typography >
                        Rick Sanchez
                    </Typography>
                    <Typography>
                        Genius scientist
                    </Typography>
                    <Typography>
                        fuckthewholeworld@gmail.com
                    </Typography>
                </div>
            </Container>
        )
    }
}
