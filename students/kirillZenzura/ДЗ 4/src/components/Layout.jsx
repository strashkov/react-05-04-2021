import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Header from './Header.jsx';
import MessageField from './MessageField.jsx';
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
                sender: 'bot',
                text: 'Привет'
            },
            2: {
                sender: 'bot',
                text: 'Как дела?'
            }
        }
    };

    handleSendMessage = (text, sender = 'me', chatId = this.props.chatId) => {
        const messageId = Object.keys(this.state.messages).length + 1;

        this.setState((state) => {
            return {
                messages: {
                    ...state.messages,
                    [messageId]: {
                        text,
                        sender
                    }
                }
            };
        });

        this.props.sendMessage(messageId, chatId);

        if (sender !== 'bot') {
            setTimeout(() => {
                this.handleSendMessage('Я робот!', 'bot', chatId);
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
