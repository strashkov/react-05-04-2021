import React from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    };
    render() {
        return (
            <div className="header">
             <h2>
                 Чат {this.props.chatId || 'не выбран'}
                 </h2>  
=======


export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
             <h2>Это чат с роботом</h2>  
>>>>>>> a9c2efd348244b4816e9f1a9d1d00f0c9269334b
            </div>
        );
    }
}