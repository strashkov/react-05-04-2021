import React from 'react';
import ReactDom, { render } from 'react-dom';


const messages = [
    'Hello!',
    'Hi',
    'Привет'
];

const Message = ({ message }) => {
    return (
        <div className="message">
            {message}
        </div>
    );
};

const MessageList = ({ messages }) => {
    return messages.map((message, index) => {
        return <Message key={index} message={message} />
    });
};

const newMessage = () => {
    messages.push('Нормально');
    reRender()

}

const Button = (props) => {
    const clickHandler = () => {
        newMessage()
    };

    return <button style={{ color: '#ff0000' }} onClick={clickHandler}>{props.children}</button>
};

const reRender = () => {
    ReactDom.render(
        <>
            <MessageList messages={messages} />
            <Button>Click me</Button>
        </>,
        document.getElementById('app')
    );
};

reRender();