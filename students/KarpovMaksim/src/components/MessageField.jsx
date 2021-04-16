import React from 'react';
import Message from './Message.jsx';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';



export default class MessageField extends React.Component {
  
  constructor(props) {
    super(props)
    this.messageFieldRef = React.createRef();
  }
  
  state = {
    messages: [
      {
        text: 'Hello!',
        userName: 'Робот'
      }
    ],
    input: ''
  };

  componentDidUpdate() {
    if(this.state.messages[this.state.messages.length - 1].userName !== 'Робот' && this.state.input.length === 0 ) {
      setTimeout(() => {
        this.setState((state)=>({
          messages: [
            ...state.messages,
            {
              text: 'Не приста вай ко мне я робот',
              userName: 'Робот'
            } 
          ]
        }))
      }, 1000)
    }
    this.messageFieldRef.current.scrollTop = 
    this.messageFieldRef.current.scrollHeight - this.messageFieldRef.current.clientHeight;
   }
  handleInputKeyUp = (event) => {
    if(this.state.input) {
      if(event.keyCode === 13) {
        this.sendMessage();
      }
    }
  }
  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }
  sendMessage = () => {
    this.setState((state) => ({
        messages: [
          ...state.messages,
          {
            text: state.input,
            userName: 'Вася'
          }
        ],
        input: '' 
      }))
  }
  render() {
    const messageElements = this.state.messages.map(({text, userName}, index) => (
      <Message 
        key={index} 
        userName = {userName} 
        text={text} 
      />));

    return <div>
      <div ref={this.messageFieldRef} className='message-field'>
        { messageElements }
      </div>
      <div className="actions">
        <TextField
          fullWidth
          placeholder="введите сообщение"
          type="text"
          autoFocus
          value={this.state.input} 
          onChange={this.handleChange}
          onKeyUp={this.handleInputKeyUp} />
        <Fab
          color="primary" 
          aria-label="add"
          disabled={!this.state.input}
          onClick={this.sendMessage}>
          <SendIcon />
        </Fab>
      </div>
    </div> 
   }
} 

