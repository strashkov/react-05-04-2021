import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    };
 
    static defaultProps = {
        chatId: 1,
    };

    render() {
        return (
            <div className="header">
                <span style={ { fontSize: '20px' } }>Чат { this.props.chatId }</span>
                <Link to={ '/' }>Chats</Link> | <Link to={ '/profile/' }>Profile</Link>
            </div>
        )
    } 
}