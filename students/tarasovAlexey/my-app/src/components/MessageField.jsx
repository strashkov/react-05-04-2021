import React from 'react';
import Message from './Message';
import classes from './MessageField.module.css'

export default class MessageField extends React.Component {
    state = {
        messages: [
            {
                author: 'user1',
                message: 'Привет!'
            },
            {
                author: 'user1',
                message: 'Как дела?'
            },]
    };

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length-1].author !==  'bot') {
            setTimeout(() =>
                this.setState((state) => ({
                    messages: [
                        ...state.messages,{
                            author: 'bot',
                            message: 'Не приставай ко мне!'
                        }
                    ]
                })), 1000);
        }
    }

    handleClick = () => {
        this.setState((state) => ({
            messages: [...state.messages, {
                author: 'user2',
                message: 'Нормально!'
            }]
        }));
    };

    render() {
        const messageElements = this.state.messages.map(({message, author}, index) => (
            <Message key={index} text={message} author={author}/>));
        console.log(messageElements)
        return <div>
            <button className={classes.myButton} onClick={this.handleClick}>Отправить сообщение</button>
            {messageElements}
        </div>
    }
}

