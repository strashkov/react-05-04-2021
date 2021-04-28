import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Header from './components/Header.jsx'
import MessageField from './components/MessageField.jsx';
import ChatList from './components/ChatList.jsx';

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    };
    state = {
        chats: {
            1: {
                title: 'Chat 1',
                messageList: [1, 2]
            },
            2: {
                title: 'Chat 2',
                messageList: [2]
            },
        },
        messages: {
            1: {
                sender: 'bot',
                text: 'hi'
            },
            2: {
                sender: 'bot',
                text: 'How is it going?'
            },
        }
    }
    handleAddChat = (title) => {
        this.setState((state) => {
            const chatId = Object.keys(this.state.chats).length + 1
            return {
                chats: {
                    ...this.state.chats,
                    [chatId]: {
                        title: title
                    }
                },
            }
        })
    }

    handleAddMessage = (text, sender = 'me', chatId=this.props.chatId) => {
        this.setState((state) => {
            const mIdx = Object.keys(this.state.messages).length + 1
            return {
                messages: {
                    ...state.messages,
                    [mIdx]: {
                        text,
                        sender,
                    }
                },
                chats: {
                    ...state.chats,
                    [chatId]: {
                        ...state.chats[chatId],
                        messageList: [
                            ...state.chats[chatId].messageList,
                            mIdx,
                        ]
                    }
                }
            }
        })
        if (sender !== 'bot') {
            setTimeout(() => {
                this.handleAddMessage('i\'m bot', 'bot', chatId)
            }, 1000)
        }
    }

    render() {
        const chatId = this.props.chatId;
        const chats = this.state.chats;
        const messages = this.state.messages;
        const activeMessages = chats[chatId].messageList.map((messageId) => {
            return messages[messageId]
        });
        return (
            <Container className="layout">
                <Header chatId={chatId}/>
                <div className="content">
                    <ChatList chats={chats} chatId={chatId} onAddChat={this.handleAddChat}/>
                    <MessageField
                        onAddMessage={this.handleAddMessage}
                        messages={activeMessages}/>
                </div>
            </Container>
        );
    }
}