
import React from 'react';
import Message from './Message.jsx';

export default class MessageField extends React.Component {
   state = {
       messages: [
           {text:"Привет!", author: 'robot'}, 
           {text:"Как дела?", author: 'robot'}]
   };

   componentDidUpdate() {
       if (this.state.messages[this.state.messages.length-1].author !== 'robot'){
    setTimeout( () =>
    this.setState( (state) => ({
        messages: [
             ...this.state.messages, 
             {text:'Не приставай ко мне, я робот!',  author: 'robot'}  
            ] 
        })), 1000);
    }
}


   handleClick = () => {
       this.setState ((state) => ({ 
           messages: [ 
               ...state.messages, 
               {text:'Нормально',  author: 'me'}            
            ]
        }));       
   };

   render() {
       const messageElements = this.state.messages.map(({text, author}, index) => (
           <Message key={ index } text={ text } author={ author }/>));

       return <div>
           { messageElements }
           <button onClick={ this.handleClick }>Отправить сообщение</button>
       </div>
   }
}

