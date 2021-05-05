import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import '../styles/style.css';

export default class Message extends React.Component {
    static propTypes = {
        messageId: PropTypes.number.isRequired,
        chatId: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        sender: PropTypes.string.isRequired,
        deleteMessage: PropTypes.func.isRequired
    };

    handleDeleteMessageClick = () => {
        const { chatId, messageId } = this.props;

        this.props.deleteMessage({
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
                <div
                    className="message"
                    style={ { alignSelf: isBot ?
                            'flex-start' : 'flex-end' } }
                >
                    <div>{ text }</div>
                    <div className="message-sender">{ sender }</div>
                    <IconButton
                        style={deleteButtonStyle}
                        className="message-delete"
                        onClick={this.handleDeleteMessageClick}>
                        <Delete />
                    </IconButton>
                </div>
            </div>
        )
    }
}
