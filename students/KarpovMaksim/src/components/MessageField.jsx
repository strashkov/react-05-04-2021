import React from 'react';
import Message from './Message.jsx';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import PropTypes from 'prop-types';



export default class MessageField extends React.Component {
  static propTypes = {
    them: PropTypes.string,
    messages: PropTypes.arrayOf(PropTypes.shape({
      userName: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })),
    onSendMessage: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.messageFieldRef = React.createRef();
  }
  
  state = {
    input: ''
  };

  componentDidUpdate() {
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
    this.props.onSendMessage(this.state.input);
    this.setState({
      input: '' 
    })
  }

  render() {

   
    const messageElements = this.props.messages.map(({text, userName}, index) => (
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

