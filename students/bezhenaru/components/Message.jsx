import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
    static propTypes = {
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    };

    render() {
        return <div> {this.props.author + ": " + this.props.text}</div>
    }
} 