import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Header from './Header.jsx';
import MessageField from './MessageField.jsx';
import ChatList from './ChatList.jsx';

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    };

    static defaultProps = {
        chatId: 1
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
                sender: 'bot',
                text: 'Привет'
            },
            2: {
                sender: 'bot',
                text: 'Hello'
            }
        }
    }

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
                }
            };
        });

        if(sender !=='bot'){
            setTimeout (() => {
                this.handleSendMessage('Я робот', 'bot', chatId)
            }, 1000)
        }

    };

    render() {
        const { chatId } = this.props;
        const { chats, messages } = this.state;

        const activeMessages = chats[chatId].messageList.map((messageId) => {
            return messages[messageId];
        });

        return (
            <Container className="layout">
                <Header chatId={chatId} />
                <div className="content">
                    <ChatList 
                    chatId={chatId} 
                    chats={chats}/>
                    <MessageField 
                    messages={activeMessages} 
                    onSendMessage={this.handleSendMessage}/>
                </div>
            </Container>
        );
    }
}
