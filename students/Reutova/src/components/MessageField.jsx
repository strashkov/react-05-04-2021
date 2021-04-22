
import React from 'react';
import Message from './Message.jsx';
<<<<<<< HEAD
import PropTypes from 'prop-types';

=======
>>>>>>> a9c2efd348244b4816e9f1a9d1d00f0c9269334b
import '../styles/style.css';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';


export default class MessageField extends React.Component {
    static propTypes = {
        
        messages: PropTypes.arrayOf(PropTypes.shape({
            sender: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })),

        onSendMessage: PropTypes.func.isRequired
    };

   state = {
<<<<<<< HEAD
       input: ''
=======
       messages: [
           {
               text:"Привет!", 
               sender: 'robot'
            }, 
           {
               text:"Как дела?", 
               sender: 'robot'
            }
        ],
        input: ''
>>>>>>> a9c2efd348244b4816e9f1a9d1d00f0c9269334b
   };

   constructor(props) {
       super(props);

       this.messageFieldRef = React.createRef(); //для скролла
   }

<<<<<<< HEAD
   componentDidUpdate() { 
=======
   componentDidUpdate(prevProps, prevState) {
       
        if  (
            prevState.messages.length !== this.state.messages.length &&
            this.state.messages[this.state.messages.length-1].sender !== 'robot') {    
    
        setTimeout( () =>
    this.setState( (state) => ({
        messages: [
             ...state.messages, 
             {
                 text:'Не приставай ко мне, я робот!', 
                 sender: 'robot'
             }  
            ] 
        })), 1000);
    }
>>>>>>> a9c2efd348244b4816e9f1a9d1d00f0c9269334b

    this.messageFieldRef.current.scrollTop = 
        this.messageFieldRef.current.scrollHeight - this.messageFieldRef.current.clientHeight;
}


   sendMessage = () => {
<<<<<<< HEAD
       this.props.onSendMessage(this.state.input);
    
       this.setState ({         
            input:'' //очистка сообщения после ввода
        });    
=======
       this.setState ((state) => ({ 
           messages: [ 
               ...state.messages, 
               {
                   text:state.input,  
                   sender: 'me'
                }            
            ],
            input:'' //очистка сообщения после ввода
        }));    
>>>>>>> a9c2efd348244b4816e9f1a9d1d00f0c9269334b
        
       
   };

   handleClick = () => {
        this.sendMessage();
<<<<<<< HEAD
   };

   handleChangeInput = ({ target: { value } }) => {
       this.setState({
            input: value
       })
   };

   handleInputKeyUp = (event) => {
       if (event.keyCode === 13) { // 13 соотв клавише enter
           this.sendMessage();
       }
   };

   render() {  

    const messageElements = this.props.messages.map(({text, sender}, index) => (
        <Message
            key={index}
            text={text}
            sender={sender}/>)
    );

=======
   };

   handleChangeInput = (event) => {
       this.setState({
            input: event.target.value
       })
   };

   handleInputKeyUp = (event) => {
       if (event.keyCode === 13) { // 13 соотв клавише enter
           this.sendMessage();
       }
   };

   render() {
    const messageElements = this.state.messages.map(({text, sender}, index) => (
        <Message
            key={index}
            text={text}
            sender={sender}/>)
    );

>>>>>>> a9c2efd348244b4816e9f1a9d1d00f0c9269334b
    return (
        <div className="layout">
            <div ref={this.messageFieldRef} className="message-field">
                { messageElements }
            </div>
            <div className='actions'>
                <TextField
                    placeholder='Введите сообщение'
                    fullWidth //булевые props можно не писать = true
                    value={this.state.input}
                    type="text"
                    autoFocus // на инпут автофокус по умолчанию
                    onKeyUp={this.handleInputKeyUp} // ловим событие нажатия на enter
                    onChange={this.handleChangeInput} />
                <Fab
                    disabled={this.state.input === ''} //кнопка неактивна, пока инпут пустой                    
                    onClick={this.sendMessage}>
                    <SendIcon />
                </Fab>
            </div>
        </div>
    )
}
}

