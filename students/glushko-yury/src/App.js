import React from 'react';
import './App.scss';
import Messages from './Components/Message/Message';
import SendingForm from './Components/SendingForm/SendingForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputFocus = React.createRef();
    this.state = {
      inputValue: '',
      messagesData: [
        { id: 1, text: 'Lorem' },
        { id: 2, text: 'Ipsum' },
      ],
    };
  }

  componentDidMount() {
    this.inputFocus.current.focus();
  }

  updateInputValue = text => {
    this.setState({ inputValue: text });
  };

  updateMessagesData = () => {
    if (this.state.inputValue) {
      const msg = this.state.inputValue;
      this.setState({ inputValue: '' });
      const newMsg = {
        id: this.state.messagesData.length + 1,
        text: msg,
      };
      const newMessagesData = [...this.state.messagesData, newMsg];
      this.setState({ messagesData: newMessagesData });
    }
  };

  render() {
    return (
      <>
        <Messages messages={this.state.messagesData} />
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
