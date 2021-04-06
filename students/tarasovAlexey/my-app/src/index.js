import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const messages = [
    'Отлично',
    'Хорошо',
    'Плохо',
];

const MessageField = ({message}) => {
    return (
        <div className="message">
            {message}
        </div>
    );
};

const MessageList = (props) => {
    return props.messages.map((messageArr, index) => {
        return <MessageField key={index} message={messageArr}/>
    });
};

const addMessage = () => {
    messages.push('Нормально');
    render();
};

const Button = (props) => {
    const handleClick = () => {
        addMessage()
    };

    return <button className="my-button" onClick={handleClick}> {props.children} </button>;
};

const App = () => (
    <div className="App">
        <Button>add message</Button>
        <MessageList messages={messages}/>
    </div>
);

const render = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
render()