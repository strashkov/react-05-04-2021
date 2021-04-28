import React from 'react';
import PropTypes from 'prop-types';
import { TextsmsTwoTone } from '@material-ui/icons';

export default class Message extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
    };

    render() {
        return (
            <div
                className="message"
                style={{
                    alignSelf: /bot/i.test(this.props.author) ?
                        'flex-start' : 'flex-end'
                }}
            >
                <div className="messageText">{this.props.text}</div>
                <div className="message-sender">{this.props.author}</div>
            </div>

        )
    }
}