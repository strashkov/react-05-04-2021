import React from 'react';
import Message from './Message.jsx';

export default class MessageField extends React.Component {
    state = {
        messages: [{message: 'Привет!', author: 'user 1'}, {message: 'Как дела?', author: 'user 1'}]
    };

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].message !== 'Не приставай ко мне, я робот!') {
            setTimeout(() =>
                this.setState((state) => ({
                    messages: [
                        ...state.messages,
                        { message: 'Не приставай ко мне, я робот!', author: 'user 1' }
                    ]
                })), 1000);
        }
    }

    handleClick = () => {
        this.setState((state) => ({
            messages: state.messages.concat({ message: 'Нормально, но нам столько надо обсудить!', author: 'user 2'})
        }));
    };

    render() {
        const messageElements = this.state.messages.map((text, index) => (
            <Message key={ index } text={ text.message } author={ text.author }/>)
        );

        return <div>
            { messageElements }
            <button onClick={ this.handleClick }>Отправить сообщение</button>
        </div>
    }
}
