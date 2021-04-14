import React from 'react';
import ReactDom from 'react-dom';

/*const element = React.createElement('div', {
    className: 'my-class',
    id: 'my-id'
}, 'React JS');*/


const messages = [
    '123Geekbrains',
    'React',
    'Привет'
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

const Button = (props) => {
    const handleClick = (event) => {
        console.log(event);
    };

    return <button style={{color: '#f00'}} onClick={handleClick}>{props.children}</button>;
};


ReactDom.render(
    <>
        <MessageList messages={messages}/>
        <Button>My button</Button>
    </>,
    document.getElementById('app')
);
