import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Header from './Header.jsx';
import MessageField from './MessageField.jsx';
import ChatList from './ChatList.jsx';
import { render } from 'react-dom';

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    };

    state = {
        chats: {
            1: {
                title: 'Чат № 1',
                messageList: [1, 2]
            },
            2: {
                title: 'Чат № 2',
                messageList: [2]
            }
        },
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

    handleAddChat = (title) => {
        this.setState((state) => {
            const chatId = Object.keys(state.chats).length + 1;

            return {
                chats: {
                    ...state.chats,
                    [chatId]: {
                        title: title,
                        messageList: []
                    }
                },
            };
        });
    };

    handleSendMessage = (text, sender = 'me', chatId = this.props.chatId) => {

        this.setState((state) => {
            const messageId = Object.keys(state.messages).length + 1;

            return {
                messages: {
                    ...state.messages,
                    [messageId]: {
                        text,
                        sender
                    }
                },
                chats: {
                    ...state.chats,
                    [chatId]: {
                        ...state.chats[chatId],
                        messageList: [
                            ...state.chats[chatId].messageList,
                            messageId
                        ]
                    }
                },
            };
        });
        if (sender !== 'bot') {
            setTimeout(() => {
                this.handleSendMessage('Я робот', 'bot', chatId)
            }, 1000);
        }

    };

    render() {
        const { chatId } = this.props;
        const { chats, messages } = this.state;

        const activeMessages = (chatId == undefined) ? [{ sender: 'bot', text: 'Чат не выбран' }] : chats[chatId].messageList.map((messageId) => {
            return messages[messageId];
        });
        // const activeMessages = chats[chatId].messageList.map((messageId) => {
        //     return messages[messageId];
        // });

        return (
            <Container className='layout'>
                <Header chatId={chatId} />
                <div className='content'>
                    <ChatList
                        chatId={chatId}
                        chats={chats}
                        onAddChat={this.handleAddChat}
                    />
                    <MessageField
                        onSendMessage={this.handleSendMessage}
                        messages={activeMessages} />
                </div>
            </Container>
        );
    }
}
