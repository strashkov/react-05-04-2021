import React from 'react';
import ReactDom from 'react-dom';

const messages = [
    'Hi', 'Hay!', 'Hallo'
];

const Message = ({ message }) => {
    return (
        <div className="message">{message}</div>
    );
};

const MessageList = ({ messages }) => {
    return messages.map((message, index) => {
        return <Message message={message} key={index} />
    })
};

const Input = () => {
    return <input type="text" id="input"/>
}

const Button = (props) => {
    const handleClick = () => {
        messages.push(input.value)
        ReactDom.render(
            <>
                <MessageList messages={messages} />
                <Input />
                <Button>Push</Button>
            </>,
            document.getElementById('app')
        );
        input.value = ''
    }
    return <button onClick={handleClick}>{ props.children }</button>
};

ReactDom.render(
    <>
        <MessageList messages={messages} />
        <Input/>
        <Button>Push</Button>
    </>,
    document.getElementById('app')
);
