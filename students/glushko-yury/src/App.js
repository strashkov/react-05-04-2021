import React from 'react';
import './App.scss';
import MessageField from './Components/MessageField/MessageField';
import SendingForm from './Components/SendingForm/SendingForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputFocus = React.createRef();
    this.state = {
      inputValue: '',
      messagesData: [
        { id: 1, user: 'me', text: 'Lorem' },
        { id: 2, user: 'me', text: 'Ipsum' },
      ],
    };
  }

  componentDidMount() {
    this.inputFocus.current.focus();
  }

  updateInputValue = text => {
    this.setState({ inputValue: text });
  };

  updateMessagesData = author => {
    switch (author) {
      case 'me':
        if (this.state.inputValue) {
          const msg = this.state.inputValue;
          this.setState({ inputValue: '' });
          const newMsg = {
            id: this.state.messagesData.length + 1,
            user: author,
            text: msg,
          };
          this.setState(prevState => ({
            messagesData: [...prevState.messagesData, newMsg],
          }));
        }
        break;

      case 'bot':
        const newMsg = {
          id: this.state.messagesData.length + 1,
          user: author,
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
      this.state.messagesData[this.state.messagesData.length - 1].user === 'me'
    ) {
      setTimeout(() => this.updateMessagesData('bot'), 1000);
    }
  }

  render() {
    return (
      <>
        <MessageField messages={this.state.messagesData} />
        <SendingForm
          inputFocus={this.inputFocus}
          inputValue={this.state.inputValue}
          updateInputValue={this.updateInputValue}
          updateMessagesData={this.updateMessagesData}
        />
      </>
    );
  }
}

export default App;
