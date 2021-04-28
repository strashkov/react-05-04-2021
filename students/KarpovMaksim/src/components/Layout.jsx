import React from 'react';
import PropTypes from 'prop-types';
import MessageField from './MessageField.jsx';
import Header from './Header.jsx';
import '../styles/style.css';
import ChatList from './ChatList.jsx';
import { connect } from 'react-redux';


class Layout extends React.Component {
  static propTypes = {
    chatId: PropTypes.string,
    chats: PropTypes.object.isRequired,
    messages: PropTypes.object
  }
  static defaultProps = {
    chatId: '1',
  }
  state = {
    chatName: '',
  }
  
  render() {
    const { chatId, chats, messages } = this.props;
    const messagesListLenght = Object.entries(messages).length;
    const lastMessage = chats[chatId].messageList.length;
    const lastUserName = (chats[chatId].messageList.map((messageId) => {
       return messages[messageId].userName;
     }))[lastMessage];
  
    return <div className="layout">
      <Header chatId={ chatId }/>
      <div className="chat-content">
        <ChatList 
          chatId={ chatId }/>
        <div className="message-content">
          <MessageField 
            messagesListLenght={messagesListLenght}
            chatId={ chatId }
            lastUserName={ lastUserName } />
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