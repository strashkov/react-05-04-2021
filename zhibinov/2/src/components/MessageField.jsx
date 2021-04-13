import React from 'react';
import Message from './Message.jsx';

export default class MessageField extends React.Component {
    state = {
        messages: [
            {
                author: 'Robot',
                message: 'Привет!'
            },
            {
                author: 'Robot',
                message: 'Как дела?'
            },]
    };

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].author !== 'Robot') {
            setTimeout(() =>
                this.setState((state) => ({
                    messages: [
                        ...state.messages, {
                            author: 'Robot',
                            message: 'Не приставай ко мне!'
                        }
                    ]
                })), 2000);
        }
    }

    handleClick = () => {
        this.setState((state) => ({
            messages: [...state.messages, {
                author: 'User_2',
                message: 'Нормально!'
            }]
        }));
    };

    render() {
        const messageElements = this.state.messages.map(({ message, author }, index) => (
            <Message key={index} text={message} author={author} />));

        return <div>
            {messageElements}
            <button onClick={this.handleClick}>Отправить сообщение</button>
        </div>
    }
}
