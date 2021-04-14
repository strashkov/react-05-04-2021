import React from 'react';
import ReactDom from 'react-dom';

const messages = [
    'GB',
    'Hi!',
    'Hello'
];

const Message = ({ message }) => {
    return (
        <div className="message">{message}</div>
    );
};

const MessageList = (props) => {
    return props.messages.map((message, index) => {
        return <Message key={index} message={message} />
    });
};

const newMessage = () => {
    messages.push('New message');
    reRender()
}

const Button = (props) => {
    const handleClick = () => {
        newMessage()
    };

    return <button style={{ color: '#ff0000', background:'green'}} onClick={handleClick}>{props.children}</button>;
};

const reRender = () => {
    ReactDom.render(
        <>
            <MessageList messages={messages} />
            <Button>Add</Button>
        </>,
        document.getElementById('app')
    );
};

reRender();