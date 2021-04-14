import React from 'react';
import Message from './Message.jsx';

export default class MessageField extends React.Component {
    state = {
        messages: [{ message: "Привет!", author: "Джон Коннор" }, { message: "Как дела?", author: "Джон Коннор" }]
    };

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].message !== 'Мне нужна твоя одежда и мотоцикл!') {
            setTimeout(() =>
                this.setState((state) => ({
                    messages: [
                        ...state.messages,
                        { message: 'Мне нужна твоя одежда и мотоцикл!', author: "Терминатор T1000" }
                    ]
                })), 1000);
        }
    }

    handleClick = () => {
        this.setState((state) => ({
            messages: state.messages.concat({ message: 'Нормально', author: "Джон Коннор" })/*[
                ...state.messages,
                'Нормально'
            ]*/
        }));
    };

    render() {
        const messageElements = this.state.messages.map((text, index) => (
            <Message key={index} text={text.message} author={text.author} />)
        );

        return <div>
            {messageElements}
            <button onClick={this.handleClick}>Отправить сообщение</button>
        </div>
    }
}
