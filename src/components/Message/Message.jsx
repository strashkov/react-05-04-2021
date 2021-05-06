import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import './style.css';

export default class Message extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        sender: PropTypes.string.isRequired,
        messageId: PropTypes.number.isRequired,
        chatId: PropTypes.string.isRequired,
        deleteMessage: PropTypes.func.isRequired
    };

    handleDeleteMessage = () => {
        const { chatId, messageId, deleteMessage } = this.props;

        deleteMessage({
            messageId,
            chatId
        })
    };

    render() {
        const { text, sender } = this.props;
        const isBot = sender === 'bot';
        const deleteButtonStyle = {
            [isBot ? 'right' : 'left']: -48
        };

        return (
            <div className="message-wrapper">
                <div className="message"
                    style={{
                        alignSelf: isBot ?
                            'flex-start' : 'flex-end'
                    }}
                >
                    <div>{text}</div>
                    <div className="message-sender">
                        {sender}
                        <IconButton
                            style={deleteButtonStyle}
                            className="message-delete"
                            onClick={this.handleDeleteMessage}>
                            <CloseIcon style={{ fontSize: 16 }} />
                        </IconButton>
                    </div>
                </div>
            </div>
        )
    }
}