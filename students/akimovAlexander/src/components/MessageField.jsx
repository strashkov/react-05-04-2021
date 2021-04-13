import React from 'react';
import Message from './Message.jsx';

export default class MessageField extends React.Component {
    state = {
        messages: [
            {
                text: 'Привет',
                sender: 'bot'
            },
            {
                text: 'Как дела',
                sender: 'bot'
            },
        ]
    };

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].sender !== 'bot') {
            setTimeout(() =>
                this.setState((state) => ({
                    messages: [
                        ...state.messages,
                        {
                            text: 'Не приставай ко мне, я робот!',
                            sender: 'bot'
                        }
                    ]
                })), 1000);
        }
    }

    handleClick = () => {
        this.setState((state) => ({
            messages: [
                ...state.messages,
                {
                    text: 'Нормально',
                    sender: 'me'
                }
            ]
        }));
    };

    render() {
        const messageElements = this.state.messages.map(({ text, sender }, index) => (
            <Message key={index} text={text} sender={sender} />)
        );

        return <div>
            {messageElements}
            <button onClick={this.handleClick}>Отправить сообщение</button>
        </div>
    }
}