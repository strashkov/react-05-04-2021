console.log('hello world');
import React from 'react';
import ReactDom from 'react-dom';

//const element = <div id="my-id" className="my-class"></div>

const messagesListArray = ["Hi!", "Hello", "Привет!"];

const Msg = ({ message }) => {
    return (
        <div id="my-id" className="msg">
            {message}
        </div>
    )
};

const MsgList = (props) => {
    return props.messagesList.map((message) => {
        return <Msg message={message} />
    })
};

const Button = (props) => {
    return (
        <button className="btn">{props.children}</button>
    )
}

ReactDom.render(
    <>
        <MsgList messagesList={messagesListArray} />
        <Button>Отправить</Button>
    </>,
    document.getElementById("app")

);