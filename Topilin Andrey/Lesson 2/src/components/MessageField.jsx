import React from 'react';
import Message from './Message.jsx';
import '../index.css';

export default class MessageField extends React.Component {
    state = {
        messages: [
            {
                name: 'Jules',
                message: 'What does Marsellus Wallace look like?!!!'
            }
        ]
    };

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].message !== 'Say "what" again!!!') {
            setTimeout(() =>
                this.setState((state) => ({
                    messages: [
                        ...state.messages, {
                            name: 'Jules',
                            message: 'Say "what" again!!!'
                        }
                    ]
                })), 1000);
        }
    }

    handleClick = () => {
        this.setState((state) => ({
            messages: [...state.messages,
            {
                name: 'Brett',
                message: 'What?'
            }
            ]
        }));
    };

    render() {
        const messageElements = this.state.messages.map(({ message, name }, index) => (
            <Message key={index} text={message} name={name} />)
        );

        return <div>
            <button className='messageBtn' onClick={this.handleClick}>MESSAGE</button>
            {messageElements}
        </div>
    }
}