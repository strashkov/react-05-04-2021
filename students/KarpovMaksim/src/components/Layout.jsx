import React from 'react';
import PropTypes from 'prop-types';
import MessageField from './MessageField.jsx';
import Header from './Header.jsx';
import '../styles/style.css';
import ChatList from './ChatList.jsx';


export default class Layout extends React.Component {
  static propTypes = {
    chatId: PropTypes.string,
    them: PropTypes.string
  }
  state = {
    chats: {
    1: {
        chat: 'Chat_1',
        them: 'other_them',
        messageList: [1, 2]
      },
    2: {
        chat: 'Chat_2',
        them: 'природе',
        messageList: [1, 3]
      },
    3: {
        chat: 'Chat_3',
        them:'рыбалке',
        messageList: [2]
      }
    },
    chatName: '',
    messages: {
      1: {        
          text: 'Hello!kffkefe',
          userName: 'Робот'
        },
      2: {
          text: 'Hello!efefe',
          userName: 'Робот'
        },
      3: {
          text: 'Hello!efefef',
          userName: 'Робот'
        }
    },
  }
  
  handlerAddChat = (chat) => {
    this.setState( (state) => {
      const chatId = Object.keys(state.chats).length + 1 ;
      return {
        chats: {
          ...state.chats,
          [chatId]: {
            chat: chat,
            them: 'чем то'
          }
        }
      }
    });
  }
  handlerSendMesage = (text, userName = 'Вася', chatId = this.props.chatId) => {
    
    this.setState( (state) => {
      const messagesId = Object.keys(state.messages).length + 1;
      return {
        messages: {
          ...state.messages,
          [messagesId]: {
            text: text,
            userName: userName
          }
        },
        chats: {
          ...state.chats,
          [chatId]: {
            ...state.chats[chatId],
            messageList: [
              ...state.chats[chatId].messageList,
              messagesId
            ]
          }
        }
      }
    });

    if(userName !== 'Робот') {
      setTimeout(() => {
        this.handlerSendMesage('Не приставай', 'Робот', chatId)
      },1000)
    }
  }
  render() {
    const { chatId, them } = this.props;
    const { chats, messages } = this.state;
    const activeMesaages = chats[chatId].messageList.map((messageId) => {
      return messages[messageId];
    })
    return <div className="layout">
      <Header chatId={ chatId }/>
      <div className="chat-content">
        <ChatList 
          chatId={ chatId }
          chats={ chats }
          onAddChat={this.handlerAddChat}/>
        <div className="message-content">
          <MessageField 
            them={ them }
            messages={ activeMesaages }
            onSendMessage={this.handlerSendMesage} />
        </div>
      </div>
    </div>
    }
}