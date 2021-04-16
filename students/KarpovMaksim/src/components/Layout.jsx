import React from 'react';
import MessageField from './MessageField.jsx';
import Header from './Header.jsx';
import '../styles/style.css';
import ChatList from './ChatList.jsx';

export default class Layout extends React.Component {
  
  render() {
   return <div className="layout">
    <Header />
    <div className="chat-content">
      <ChatList />
      <div className="message-content">
        <MessageField />
      </div>
    </div>
  </div>
  }
}