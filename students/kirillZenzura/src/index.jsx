import React from 'react';
import ReactDom from 'react-dom';

/*const element = React.createElement('div', {
    className: 'my-class',
    id: 'my-id'
}, 'React JS');*/


const messages = [
    'Geekbrains',
    'React',
    'Привет',
    'Сделано домашнее задание к первому уроку'
];

const MessageField = ({ message }) => {
    return (
        <div className="message">
            {message}
        </div>
    );
};

const MessageList = (props) => {
    return props.messages.map((message, index) => {
        return <MessageField key={index} message={message} />
    });
};

const MessageInput = (props) => {
    return <input className="messageInput" ></input>
};

const Button = (props) => {
    const handleClick = (event) => {
        console.log(event);
        props.messages.push(MessageInput.value);
        console.log(messages);

    };

    return <button style={{ color: '#f00' }} onClick={handleClick}>{props.children}</button>;
};



ReactDom.render(
    <>
        <MessageList messages={messages} />
        <MessageInput />
        <Button> Отправить</Button>

    </>,
    document.getElementById('app')
);
