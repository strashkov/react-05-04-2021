import React from 'react';
import PropTypes from 'prop-types';
import ChatList from '../ChatList/ChatList.jsx';
import Header from '../Header/Header.jsx';
import MessageField from '../MessageField/MessageField.jsx';
import s from './Layout.module.css';
import SideBar from '../sideBar/sideBar.jsx';


export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    };

    state = {
        chats: {
            1: {
                title: 'Chat 1',
                messageList: [
                    1
                ]
            },
            2: {
                title: 'Chat 2',
                messageList: [
                    2
                ]
            },
            3: {
                title: 'Chat 3',
                messageList: [
                    3
                ]
            }
        },
        messages: {
            1: {
                text: 'Hi!',
                author: 'bot'
            },
            2: {
                text: 'this is chat number 2',
                author: 'bot'
            },
            3: {
                text: 'this is chat number 3',
                author: 'bot'
            }
        },
    }

    handleAddNewChat = (title) => {
        this.setState((state) => {
            const chatId = Object.keys(state.chats).length + 1;  // таким образом автоматически определиться id нового чата (стара длина массива + 1 = новый id)
            return {
                chats: {
                    ...state.chats,
                    [chatId]: {
                        title: title
                    }
                }
            };
        });
    };

    handleSendNewMessage = (text, author = 'me', chatId = this.props.chatId) => {

        this.setState((state) => {
            const messageId = Object.keys(state.messages).length + 1;
            return {
                messages: {
                    ...state.messages,
                    [messageId]: {
                        text,
                        author
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
            }
        });

        if (author !== 'bot') {
            setTimeout(() => {
                this.handleSendNewMessage("I'm bot", 'bot', chatId);
            }, 1000);
        }
    };

    render() {
        const { chatId } = this.props;
        const { chats, messages } = this.state;

        const activeMessages = chats[chatId].messageList.map((messageId) => {
            return messages[messageId];
        })

        return (
            <div className={s.layout}> 
                <Header chatId={chatId} />
                <div className={s.container}>
                    <SideBar />
                    <div className={s.messagerContainer} >
                        <ChatList 
                            chatId={chatId} 
                            chats={chats}
                            onAddNewChat={this.handleAddNewChat} />
                        <MessageField 
                            chatId={this.props.chatId} 
                            messages={activeMessages}
                            onSendNewMessage={this.handleSendNewMessage} />
                    </div>
                </div>
            </div>
        );
    };
}