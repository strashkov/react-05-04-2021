import React from 'react';
import PropTypes from 'prop-types';
import './message.css';
// import { IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

export default class Message extends React.Component {
    static propTypes = {
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        chatId: PropTypes.string.isRequired,
        messageId: PropTypes.number.isRequired,
        deleteMessage: PropTypes.func.isRequired,
    };

    handleDeleteMessageClick = () => {
        const { chatId, messageId } = this.props;

        this.props.deleteMessage({
            messageId,
            chatId,
        });
    };

    render() {
        const { text, author } = this.props;
        const isRobot = author === 'Robot';
        const deleteButtonStyle = {
            [isRobot ? 'right' : 'left']: -48,
        };

        return (
            <div className='message-wrapper'>
                <div
                    className='message'
                    style={{
                        alignSelf: author !== 'я' ? 'flex-start' : 'flex-end',
                    }}
                >
                    <div>{text}</div>
                    <div className='message-author'>{author}</div>
                    <div
                        style={deleteButtonStyle}
                        className="message-delete"
                        onClick={this.handleDeleteMessageClick}>
                        <Delete />
                    </div>
                </div>
            </div>
        )
    }
}
