import React from 'react';
import Message from './Message.jsx';

export default class MessageField extends React.Component {
    state = {
        messages: ["Привет!", "Как дела?"]
    };

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1] !== 'Не приставай ко мне, я робот!') {
            setTimeout(() =>
                this.setState((state) => ({
                    messages: [
                        ...state.messages,
                        'Не приставай ко мне, я робот!'
                    ]
                })), 1000);
        }
    }

    handleClick = () => {
        this.setState((state) => ({
            messages: state.messages.concat('Нормально')/*[
                ...state.messages,
                'Нормально'
            ]*/
        }));
    };

    render() {
        const messageElements = this.state.messages.map((text, index) => (
            <Message key={ index } text={text} />)
        );

        return <div>
            { messageElements }
            <button onClick={ this.handleClick }>Отправить сообщение</button>
        </div>
    }
}
