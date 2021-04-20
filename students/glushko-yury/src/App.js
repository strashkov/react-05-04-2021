import React from 'react';
import { Route, Switch } from 'react-router';
import style from './App.module.scss';
import ChatList from './Components/ChatList/ChatList';
import EmptyChat from './Components/EmptyChat/EmptyChat';
import Header from './Components/Header/Header';
import MessageField from './Components/MessageField/MessageField';
import SendingForm from './Components/SendingForm/SendingForm';
import Profile from './Components/Profile/Profile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.messageFieldRef = React.createRef();
    this.state = {
      addChatInputValue: '',
      inputValue: '',
      currentChat: '',
      chats: [
        {
          chatId: '1',
          chatName: 'Chat 1',
          messages: [
            { id: 1, author: 'bot', text: 'Lorem' },
            { id: 2, author: 'bot', text: 'Ipsum' },
          ],
        },
        {
          chatId: '2',
          chatName: 'Chat 2',
          messages: [
            { id: 1, author: 'bot', text: 'Chat 2' },
            { id: 2, author: 'bot', text: 'Ipsum' },
          ],
        },
        {
          chatId: '3',
          chatName: 'Chat 3',
          messages: [
            { id: 1, author: 'bot', text: 'Chat 3' },
            { id: 2, author: 'bot', text: 'Ipsum' },
          ],
        },
      ],
    };
  }

  setCurrentChat = id => {
    this.setState(prevState => ({ currentChat: id }));
  };

  updateInputValue = text => {
    this.setState({ inputValue: text });
  };

  updateAddChatInputValue = text => {
    this.setState(prevSate => ({ addChatInputValue: text }));
  };

  addChat = event => {
    event.preventDefault();
    const chatName = this.state.addChatInputValue;
    const newChat = {
      chatId: String(this.state.chats.length + 1),
      chatName: chatName,
      messages: [],
    };
    this.setState(prevState => ({
      chats: [...prevState.chats, newChat],
      addChatInputValue: '',
    }));
  };

  deleteChat = chatId => {
    this.setState(prevState => {
      let newChats = prevState.chats;
      newChats.splice(chatId - 1, 1);
      newChats = newChats.map((chat, idx) =>
        chat.chatId === idx + 1 ? chat : { ...chat, chatId: String(idx + 1) }
      );
      return { chats: newChats };
    });
  };

  updateMessagesData = author => {
    const idx = this.state.currentChat - 1;
    let newMsg = {};
    let msg = '';
    switch (author) {
      case 'me':
        msg = this.state.inputValue;
        newMsg = {
          id: this.state.chats[idx].messages.length + 1,
          author: author,
          text: msg,
        };
        this.setState(prevState => ({
          chats: prevState.chats.map(chat => {
            return chat.chatId === this.state.currentChat
              ? { ...chat, messages: [...chat.messages, newMsg] }
              : chat;
          }),
          inputValue: '',
        }));
        break;

      case 'bot':
        newMsg = {
          id: this.state.chats[idx].messages.length + 1,
          author: author,
          text: 'Я робот',
        };
        this.setState(prevState => ({
          chats: prevState.chats.map(chat => {
            return chat.chatId === this.state.currentChat
              ? { ...chat, messages: [...chat.messages, newMsg] }
              : chat;
          }),
        }));
        break;
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const idx = this.state.currentChat - 1;
    if (
      prevState.chats[idx]?.messages.length <
        this.state.chats[idx]?.messages.length &&
      this.state.chats[idx]?.messages[this.state.chats[idx].messages.length - 1]
        .author === 'me'
    ) {
      setTimeout(() => this.updateMessagesData('bot'), 1000);
    }
    if (
      prevState.chats[idx]?.messages.length <
      this.state.chats[idx]?.messages.length
    ) {
      this.messageFieldRef.current.scrollTop =
        this.messageFieldRef.current.scrollHeight -
        this.messageFieldRef.current.clientHeight;
    }
  }

  render() {
    return (
      <div className={style.container}>
        <Header chats={this.state.chats} currentChat={this.state.currentChat} />
        <ChatList
          chats={this.state.chats}
          addChatInputValue={this.state.addChatInputValue}
          updateAddChatInputValue={this.updateAddChatInputValue}
          addChat={this.addChat}
          deleteChat={this.deleteChat}
          currentChat={this.state.currentChat}
        />
        <Switch>
          <Route exact path='/profile' component={Profile} />
          <Route
            exact
            path='/'
            render={() => <EmptyChat chats={this.state.chats} />}
          />
          <Route
            exact
            path='/chat/:chatId'
            render={props => {
              const currentMessages = this.state.chats.find(
                ({ chatId }) => chatId === props.match.params.chatId
              );
              return (
                <div className={style.MessageFieldWrapper}>
                  <MessageField
                    messages={currentMessages?.messages}
                    messageFieldRef={this.messageFieldRef}
                    setCurrentChat={this.setCurrentChat}
                    chats={this.state.chats}
                  />
                  {currentMessages ? (
                    <SendingForm
                      inputValue={this.state.inputValue}
                      updateInputValue={this.updateInputValue}
                      updateMessagesData={this.updateMessagesData}
                    />
                  ) : null}
                </div>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
