import React from 'react';
import PropTypes from 'prop-types';
import MessageField from './MessageField.jsx';
import Header from './Header.jsx';
import '../styles/style.css';
import ChatList from './ChatList.jsx';
import { connect } from 'react-redux';
//import { sendMessage } from '../actions/messageActions';
//import { bindActionCreators } from 'redux';




class Layout extends React.Component {
  static propTypes = {
    chatId: PropTypes.string,
    chats: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired
  }
  static defaultProps = {
    chatId: '1',
    //messages: {1: {text: 'Hello!kffkefe', userName: 'Робот'}}
  }
  state = {
    chatName: '',
  }
  
  
  // handlerSendMesage = (text, userName = 'Вася', chatId = this.props.chatId) => {
    
  //   this.setState( (state) => {
  //     const messagesId = Object.keys(state.messages).length + 1;
  //     return {
  //       messages: {
  //         ...state.messages,
  //         [messagesId]: {
  //           text: text,
  //           userName: userName
  //         }
  //       },
  //       chats: {
  //         ...state.chats,
  //         [chatId]: {
  //           ...state.chats[chatId],
  //           messageList: [
  //             ...state.chats[chatId].messageList,
  //             messagesId
  //           ]
  //         }
  //       }
  //     }
  //   });

  //   if(userName !== 'Робот') {
  //     setTimeout(() => {
  //       this.handlerSendMesage('Не приставай', 'Робот', chatId)
  //     },1000)
  //   }
  //}
  render() {
    const { chatId, chats, messages } = this.props;
    //const { messages } = this.state;
    const messagesListLenght = Object.keys(messages).length;
    const lastMessage = chats[chatId].messageList.length;
    const lastUserName = chats[chatId].messageList.map((messageId) => {
       return messages[messageId].userName;
     });
    const activeMesages = chats[chatId].messageList.map((messageId) => {
      return messages[messageId];
    });

    return <div className="layout">
      <Header chatId={ chatId }/>
      <div className="chat-content">
        <ChatList 
          chatId={ chatId }/>
        <div className="message-content">
          <MessageField 
            messages={ activeMesages }
            messagesListLenght={messagesListLenght}
            chatId={ chatId }
            lastUserName={ lastUserName[lastMessage] } />
        </div>
      </div>
    </div>
    }
}
const mapStateToProps = (store) => ({
  chats: store.chatReducer.chats,
  messages: store.chatReducer.messages
});


export default connect(mapStateToProps)(Layout);