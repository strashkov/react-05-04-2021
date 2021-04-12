import React from 'react';
import Message from './Message.jsx';


export default class MessageField extends React.Component {
    state = {
        messages: [
            {
                text: 'Привет, как дела?',
                author: 'Петя'
            }
        ]
    }

    componentDidUpdate(/*prevProps, prevState*/) {
        if (this.state.messages[this.state.messages.length - 1].author !== 'bot') {
            setTimeout(() =>
                this.setState((state) => ({
                    messages: [...state.messages, { text: 'Не приставай ко мне, я робот', author: 'bot' }]
                })
            ), 1000);
        }
    }

    handleClick = () => {
        this.setState((state) => ({
            messages: [...state.messages, { text: 'Нормально', author: 'Вова' }]
        }));
    }

    render() {
        const messageElements = this.state.messages.map((el, index) => (
            <Message key={index} text={el.text} author={el.author} />
        ))

        return (
            <>
                { messageElements}
                <button onClick={this.handleClick}>Отправить сообщение</button>
            </>
        )
    }
}