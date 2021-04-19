import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
    static propTypes = {
        chatName: PropTypes.string.isRequired,
    };

    render() {
        return <div className="header">{ this.props.chatName }</div>
    } 
}