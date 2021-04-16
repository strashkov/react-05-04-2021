import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';
import Layout from './components/Layout.jsx';
import MessageField from './components/MessageField.jsx';

const messages = [
    'Hi',
    'Hello',
    'Привет'
];

const Message = ({ message }) => {  // деструкруризированный props для удобства
    return (
        <div className='message'>
            {message}
        </div>
    );
};

const MessageList = (props) => {
    return props.messages.map((message, index) => {
        return <Message key={index} message={message}/>
    });
};

const Button = (props) => {
    const handleClick = (event) => {
        messages.push('нормально');
        ReactDom.render(
            <>
                <MessageList messages={messages} />
                <Button>My button</Button>
            </>,
            document.getElementById('app')
        );
        console.log(messages);
    }
    return <button onClick={handleClick}>{props.children}</button>;
};

ReactDom.render (
    <div>
        <Layout />
        {/* <App /> */}
        {/* <MessageList messages={messages} />
        <Button>My button</Button> */}
    </div>,
    document.getElementById('app')
);