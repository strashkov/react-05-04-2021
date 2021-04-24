import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    };
    render() {
        return (
            <div className="header">
                <div>Чат {this.props.chatId || 'не выбран'}</div>
                <Link className="btn" to={'/profile'}>
                    <Button variant="contained">Профиль</Button>
                </Link>

            </div>
        )
    }
}


