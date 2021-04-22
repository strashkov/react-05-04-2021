import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
=======

>>>>>>> a9c2efd348244b4816e9f1a9d1d00f0c9269334b
import ChatList from './ChatList.jsx';
import Header from './Header.jsx';
import MessageField from './MessageField.jsx';

export default class Layout extends React.Component {
<<<<<<< HEAD
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
                sender: 'robot',
                text: 'Привет'
            },
            2: {
                sender: 'robot',
                text: 'Как дела'
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
if (sender !=='robot') {
        setTimeout( () => {
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
            <div className="layout-main">
                <Header chatId={chatId} />
                <div className="chatarea">                    
                    <ChatList 
                    chatId={chatId}
                    chats={chats}
                    onAddChat={this.handleAddChat}
                    />
                    <MessageField 
                    onSendMessage={this.handleSendMessage}
                    messages={activeMessages}/>
                </div>
            </div>
        );
    }
}

=======
    render() {
        return (
            <div className="layout-main">
                <Header/>
                <div className="chatarea">                    
                    <ChatList/>
                    <MessageField/>
                </div>
            </div>
        )
    }
}

//<ChatList/>
>>>>>>> a9c2efd348244b4816e9f1a9d1d00f0c9269334b
