import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Header from '../Header/Header';
import ChatList from '../ChatList/ChatList';
import MessageField from '../MessageField/MessageField';
import './layout.css';

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    };

    state = {
        chats: {
            1: {
                title: 'Чат 1',
                messageList: [1, 2]
            },
            2: {
                title: 'Чат 2',
                messageList: [2]
            }
        },
        messages: {
            1: {
                text: 'Привет!',
                sender: 'bot'
            },
            2: {
                text: 'Как дела?',
                sender: 'bot'
            }
        },
    };

    handleAddChat = (title) => {
        this.setState((state) => {
            const chatId = Object.keys(state.chats).length + 1;

            return {
                chats: {
                    ...state.chats,
                    [chatId]: {
                        title: title
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
                this.handleSendMessage('Я робот!', 'bot', chatId)
            }, 1000);
        }
    };

    render() {
        const { chatId } = this.props;
        const { chats, messages } = this.state;

        const activeMessages = chats[chatId].messageList.map((messageId) => {
            return messages[messageId];
        });

        return (
            <Container className="layout" >
                <Header chatId={chatId} />
                {chatId === 'profile' ?
                    <Profile chatId={chatId} />
                    :
                    <div className='main'>
                        <div className="main-left">
                            <ChatList
                                chatId={chatId}
                                chats={chats}
                                onAddChat={this.handleAddChat} />
                        </div>
                        <div className="main-right">
                            <MessageField
                                messages={activeMessages}
                                onSendMessage={this.handleSendMessage} />
                        </div>
                    </div>
                }
            </Container>
        );
    }
}