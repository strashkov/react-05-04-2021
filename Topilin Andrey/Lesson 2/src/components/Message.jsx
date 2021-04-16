import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

export default class Message extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    };

    render() {
        return <div className='message'>{this.props.name} : {this.props.text}</div>
    }
}