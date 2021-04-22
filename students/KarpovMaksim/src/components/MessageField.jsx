import React from 'react';
import Message from './Message.jsx';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import PropTypes from 'prop-types';



export default class MessageField extends React.Component {
  static propTypes = {
    chatId: PropTypes.string,
    them: PropTypes.string
  }
  constructor(props) {
    super(props)
    this.messageFieldRef = React.createRef();
  }
  
  state = {
    messages: {
      '1': [
        {
          text: 'Hello!kffkefe',
          userName: 'Робот'
        }
      ],
      '2': [
        {
          text: 'Hello!efefe',
          userName: 'Робот'
        }
      ],
      '3': [
        {
          text: 'Hello!efefef',
          userName: 'Робот'
        }
      ]
    },
    input: ''
  };

  componentDidUpdate() {
    const { chatId, them } = this.props;
    if(this.state.messages[chatId][this.state.messages[chatId].length - 1].userName !== 'Робот' && this.state.input.length === 0 ) {
      setTimeout(() => {
        this.setState((state)=>({
          messages: {
            ...state.messages,
            [chatId]: [
              ...state.messages[chatId],
              {
                text: `Не приста вай ко мне я робот из чата ${chatId} о ${them}`,
                userName: 'Робот'
              } 
            ]
          }
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
    const { chatId } = this.props;
    this.setState((state) => ({
      messages: {
        ...state.messages,
        [chatId]: [
          ...state.messages[chatId],
          {
            text: state.input,
            userName: 'Вася'
          } 
        ]
      },
      input: '' 
    }))
  }
  render() {
    const { chatId } = this.props;
    if (!chatId) {
      return <div className='empty-chat'>Выберете чат</div>
    }
    const messageElements = this.state.messages[chatId].map(({text, userName}, index) => (
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
          style={{ marginRight: '12px', marginLeft: '12px' }}
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

