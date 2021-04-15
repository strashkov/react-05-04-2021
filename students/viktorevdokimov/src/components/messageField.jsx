import React from 'react';
import Message from './Message';

export default class MessageField extends React.Component {
    state = {
        messages: [
           {
                text: "Привет!",
                sender: "bot"
            },
            {
                text: "Как дела?",
                sender: "bot"
            } 
        ]
        
    };

    componentDidUpdate() {
        if (this.state.messages.length % 2 === 1) {
            setTimeout(() =>
                this.setState({ 
                    messages: [ ...this.state.messages, { text: 'Не приставай ко мне, я робот!', sender: 'bot' } ] 
                }), 1000);  
        }  
    }

   handleClick = () => {
       this.setState({ 
           messages: [ ...this.state.messages, { text: 'Нормально', sender: 'user' } ] 
        });
   };

   render() {
       const messageElements = this.state.messages.map(({text, sender}, index) => (
           <Message key={ index } text={ text } author={ sender }/>));

       return <div>
           { messageElements }
           <button onClick={ this.handleClick }>Отправить сообщение</button>
       </div>
   }
}
