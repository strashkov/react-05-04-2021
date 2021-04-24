import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/style.css';

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    };
    render() {
        return (
            <div className='header header-flex'>
                Чат {this.props.chatId || 'Не выбран'}
                <Link to={`/profile`}>
                    <div>
                        Войти в профиль
                       </div>
                </Link>
            </div>
        );
    }
}