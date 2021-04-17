import React from 'react';
import PropTypes from 'prop-types';
import '../styles/style.css';

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    };

    render() {
        return (
            <div className="header">
                Чат {this.props.chatId || 'не выбран'}
            </div>
        );
    }
}