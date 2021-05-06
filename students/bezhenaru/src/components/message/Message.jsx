import React from 'react';
import PropTypes from 'prop-types';
import './message.css';

export default class Message extends React.Component {
    static propTypes = {
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    };

    render() {
        return (
            <div
                className='message'
                style={{
                    alignSelf:
                        this.props.author !== 'me' ? 'flex-start' : 'flex-end',
                }}
            >
                <div>{this.props.text}</div>
                <div className='message-author'>{this.props.author}</div>
            </div>
        );
    }
}
