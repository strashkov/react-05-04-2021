import React from "react";
import ReactDom from "react-dom";

// const element = React.createElement('div',{
//     className: 'my-class',
//     id : 'my-id',

// }, 'React JS') так не надо

const messages =[
    'Hi',
    'Hello',
    'Alloha'
];

const Message = ({message}) => {
    return (
    <div className="message">
        {message}
        </div>
    );
};

const MessageList = (props) =>{
    return props.messages.map((message,index)=>{
       return <Message key={index}  message={message}/>;
    });
};

const Button = (props) => {
    const handleClick = (event) => {
        messages.push('Новое сообщение');
        render();
    };
    return (<button onClick={handleClick} style={{ color: '#f00' }}>
        {props.children}
    </button>);
};

let render = () => {
    ReactDom.render(
        <>
            <MessageList messages={messages} />
            <Button>My button</Button>
        </>,
        document.getElementById('app')
    );
};
render();