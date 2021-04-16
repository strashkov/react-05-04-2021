import React from 'react';
import Message from './Message';

export default class MessageField extends React.Component {

    state = {
        messages: [
            'droid: Привет'
        ],
    };

    handleClick = () => {
        this.setState((state) => ({ messages: [...this.state.messages, `user: ${input.value}`] }));

    };

    componentDidUpdate(prevProps, prevState) {

        if (prevState.messages[prevState.messages.length - 1] !== `user: ${input.value}`) {
            setTimeout(() => {
                this.setState((state) => ({
                    messages: [...this.state.messages, 'droid: Не приставай ко мне, я робот!']
                }))
            }, 1000);
            setTimeout(() => { input.value = '' }, 1001)
        }
    }


    render() {
        const messageElements = this.state.messages.map((text, index) => (
            <Message key={index} text={text} />));

        return <div>
            {messageElements}
            <input type="text" id="input" />
            <button onClick={this.handleClick}>Отправить сообщение</button>
        </div>
    }
}
