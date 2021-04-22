import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
    static propTypes = {
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    };

    render() {
        return (
            <div
                className="message"
                style={{
                    alignSelf: this.props.author === 'Robot' ?
                        'flex-start' : 'flex-end'
                }}
            >
                <div>{this.props.text}</div>
                <div className="message-sender">{this.props.author}</div>
            </div>

        )
    }
}