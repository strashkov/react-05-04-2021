import React from 'react';
import Message from './Message.jsx';

export default class MessageField extends React.Component {
    state = {
        messages: [
            {
                author: 'Robocop', 
                text: "Привет!"
            },
            {
                author: 'Robocop', 
                text: "Как дела?" 
            }
            , ]
    };

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].author !== 'Robocop') {
            setTimeout(() =>
                this.setState((state) => ({
                    messages: [
                        ...state.messages,
                       {
                        text: 'не приставай, я робот',
                        author: 'Robocop'
                       }
                    ]
                })), 2000);
        }
    }

    handleClick = () => {
        this.setState((state) => ({
            messages: 
            // state.messages.concat('Нормально')
            [
                ...state.messages, 
               {
                   text: 'нормально',
                   author: 'me'
               }
            ]
        }));
    };

    render() {
        const messageElements = this.state.messages.map(({author, text}, index) => (
            <Message key={ index } text={text} author={author} />)
        );

        return <div>
            { messageElements }
            <button onClick={ this.handleClick }>Отправить сообщение</button>
        </div>
    }
}
 