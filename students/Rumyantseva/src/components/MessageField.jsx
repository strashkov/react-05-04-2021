import React from 'react';
import Message from './Message.jsx';

export default class MessageField extends React.Component {
    state = {
        messages: [
            { author: 'bot', message: 'Привет!' },
            { author: 'me', message: 'Как дела?' },
        ]
    };

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].message !== 'Не приставай ко мне, я робот!') {
            setTimeout(() =>
                this.setState((state) => ({
                    messages: [
                        ...state.messages, {
                            author: 'bot',
                            message: 'Не приставай ко мне, я робот!'
                        }
                    ]
                })), 1000);
        }
    }

    handleClick = () => {
        this.setState((state) => ({
            messages: [
                ...state.messages, {
                    author: 'me',
                    message: 'Нормально?'
                }
            ]
        }));
    };

    render() {
        const messageElements = this.state.messages.map((text, index) => (
            <Message key={index} author={text.author} text={text.message} />)
        );
        console.log(this.state.messages);
        //console.log(this.state)

        return <div>
            {messageElements}
            <button onClick={this.handleClick}>Отправить сообщение</button>
        </div>
    }
}