import React from 'react';
import MessageField from './MessageField.jsx';
import Header from './Header.jsx';
import '../styles/style.css';
import ChatList from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default class Layout extends React.Component {
  chatTheme = ['Chat_1_about_other_them',' Chat_2',' Chat_3_test']
  render() {
   return <div className="layout">
    <Header />
    <div className="chat-content">
      <ChatList >
        {(this.chatTheme.map((theme,index) => (
          <ListItem key={index}>
            {theme}
          </ListItem>
          )))
        }
      </ChatList>
      <div className="message-content">
        <MessageField />
      </div>
    </div>
  </div>
  }
}