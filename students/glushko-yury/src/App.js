import React from 'react';
import style from './App.module.scss';
import ChatList from './Components/ChatList/ChatList';
import Header from './Components/Header/Header';
import MessageField from './Components/MessageField/MessageField';
import SendingForm from './Components/SendingForm/SendingForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.messageFieldRef = React.createRef();
    this.state = {
      inputValue: '',
      messagesData: [
        { id: 1, author: 'bot', text: 'Lorem' },
        { id: 2, author: 'bot', text: 'Ipsum' },
      ],
    };
  }

  updateInputValue = text => {
    this.setState({ inputValue: text });
  };

  updateMessagesData = author => {
    let newMsg = {};
    let msg = '';
    switch (author) {
      case 'me':
        if (this.state.inputValue) {
          msg = this.state.inputValue;
          this.setState({ inputValue: '' });
          newMsg = {
            id: this.state.messagesData.length + 1,
            author: author,
            text: msg,
          };
          this.setState(prevState => ({
            messagesData: [...prevState.messagesData, newMsg],
          }));
        }
        break;

      case 'bot':
        newMsg = {
          id: this.state.messagesData.length + 1,
          author: author,
          text: 'Я робот',
        };
        this.setState(prevState => ({
          messagesData: [...prevState.messagesData, newMsg],
        }));
        break;
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.messagesData.length < this.state.messagesData.length &&
      this.state.messagesData[this.state.messagesData.length - 1].author ===
        'me'
    ) {
      setTimeout(() => this.updateMessagesData('bot'), 1000);
    }

    this.messageFieldRef.current.scrollTop =
      this.messageFieldRef.current.scrollHeight -
      this.messageFieldRef.current.clientHeight;
  }

  render() {
    return (
      <div className={style.container}>
        <Header />
        <ChatList />
        <div className={style.MessageFieldWrapper}>
          <MessageField
            messages={this.state.messagesData}
            messageFieldRef={this.messageFieldRef}
          />
          <SendingForm
            inputValue={this.state.inputValue}
            updateInputValue={this.updateInputValue}
            updateMessagesData={this.updateMessagesData}
          />
        </div>
      </div>
    );
  }
}

export default App;
