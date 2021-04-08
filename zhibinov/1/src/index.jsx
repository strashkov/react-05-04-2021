import React from 'react';
import ReactDom from 'react-dom';

const messages = [
    "Robots",
    "don't",
    "cry"
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

const Button = (props) => {
    const handleClick = (event) => {
        console.log(event);
    };
    return <button onClick={handleClick}>{props.children}</button>;
};

ReactDom.render(
    <>
        <MessageList messages={messages} />
        <Button>Моя кнопка</Button>
    </>,
    document.getElementById('app')
);