import React from 'react';
import PropTypes from 'prop-types';
import MessageField from './MessageField.jsx';
import Header from './Header.jsx';
import '../styles/style.css';
import ChatList from './ChatList.jsx';

export default class Layout extends React.Component {
  static propTypes = {
    chatId: PropTypes.string,
  }
  static defaultProps = {
    chatId: '1',
  }
  state = {
    chatName: '',
  }
  
  render() {
    const { chatId} = this.props;
    
    return <div className="layout">
      <Header chatId={ chatId }/>
      <div className="chat-content">
        <ChatList 
          chatId={ chatId }/>
        <div className="message-content">
          <MessageField 
            chatId={ chatId } />
        </div>
      </div>
    </div>
    }
}
