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
  
  render() {
    const {chatId, them} = this.props;

    return <div className="layout">
      <Header chatId={ chatId }/>
      <div className="chat-content">
        <ChatList chatId={ chatId }/>
        <div className="message-content">
          <MessageField chatId={ chatId } them={ them }/>
        </div>
      </div>
    </div>
    }
}