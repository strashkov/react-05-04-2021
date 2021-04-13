import React from 'react';
import Message from './Message.jsx';

export default class MessageField extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    messages: [],
    userNames: []
  };
  messageInput = '';

  componentDidUpdate() {
    if(this.state.messages[this.state.messages.length - 1] !== 'Не пристовай ко мне я робот') {
      setTimeout(() => {
        this.setState((state)=>({
          messages: [
            ...state.messages, 
            'Не пристовай ко мне я робот'
          ],
          userNames: [
            ...state.userNames,
            'Робот'
          ]
        }))
      }, 1000)
    }
   }
  
  handleChange(event) {
    this.messageInput= event.target.value;
  }
  handleSubmit(event) {
    const form = event.target;
    this.setState((state) => ({
      messages: [
        ...state.messages,
        this.messageInput
      ],
      userNames: [
        ...state.userNames,
        'Вася'
      ]
    }))
    form.reset();
    event.preventDefault();
  }
  render() {
    const messageElements = this.state.messages.map((text, index) => (
      <Message key={ index } userName = { this.state.userNames[index] } text={ text } />));

    return <div>
      { messageElements }
        <form onSubmit={this.handleSubmit}>
          <label>
            Сообщение:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Отправить сообщение" />
        </form>
      </div>
   }
} 

