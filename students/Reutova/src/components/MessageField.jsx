
import React from 'react';
import Message from './Message.jsx';
import '../styles/style.css';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';


export default class MessageField extends React.Component {
   state = {
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
   };

   constructor(props) {
       super(props);

       this.messageFieldRef = React.createRef(); //для скролла
   }

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

    this.messageFieldRef.current.scrollTop = 
        this.messageFieldRef.current.scrollHeight - this.messageFieldRef.current.clientHeight;
}


   sendMessage = () => {
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
        
       
   };

   handleClick = () => {
        this.sendMessage();
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

