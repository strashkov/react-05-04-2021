import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './header.css';

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    };

    render() {
        return (
            <div className="header">
                Чат {this.props.chatId || 'не выбран'}
                <Link className='profile-link' to={'/profile'}>Профиль</Link>
            </div>
        );
    }
}
