import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import '../styles/style.css';
import MessageField from './MessageField.jsx';
import Header from './Header.jsx';
import ChatList from '../containers/ChatList';

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.string,
        chats: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired
    };
    static defaultProps = {
        chatId: 1
    };

    state = {
        messages: {
            1: {
                author: 'Robocop',
                text: 'Привет'
            },
            2: {
                author: 'Robocop',
                text: 'Как дела?'
            }
        }
    };

    handleSendMessage = (text, author = 'me', chatId = this.props.chatId) => {
        const messageId = Object.keys(this.state.messages).length + 1;

        this.setState((state) => {
            return {
                messages: {
                    ...state.messages,
                    [messageId]: {
                        text,
                        author
                    }
                }
            };
        });

        this.props.sendMessage(messageId, chatId);

        if (author !== 'Robocop') {
            setTimeout(() => {
                this.handleSendMessage('Я робот!', 'Robocop', chatId);
            }, 1000);
        }
    };

    render() {
        const { chatId, chats } = this.props;
        const { messages } = this.state;

        const activeMessages = chats[chatId].messageList.map((messageId) => {
            return messages[messageId];
        });

        return (
            <Container className="layout">
                <Header chatId={chatId} />
                <div className="content">
                    <ChatList chatId={chatId} />
                    <MessageField
                        messages={activeMessages}
                        onSendMessage={this.handleSendMessage} />
                </div>
            </Container>
        );
    }
}
