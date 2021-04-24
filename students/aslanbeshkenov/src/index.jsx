import React from "react";
import ReactDom from "react-dom";

// const element = React.createElement("div", {
//     className: "my-class",
//     id: "my-id"
// }, "React JS");

// const element = <div id="my-id" className="my-class">Hello React</div>;

const messages = [
    "Geek",
    "React",
    "Привет"
];

const Message = ({ message }) => {
    return (
        <div className="message">
            {message}
        </div>
    );
};

const MessageList = (props) => {
    return props.message.map((message, index) => {
        return <Message key={index} message={message} />
    });
};

const Button = (props) => {
    const handleClick = () => {
        messages.push("Ok");
        ReactDom.render(
            <>
                <MessageList message={messages} />
                <Button>My button</Button>
            </>,
            document.getElementById("app")
        );
    }
    return <button onClick={handleClick}>{props.children}</button>
};

ReactDom.render(
    <>
        <MessageList message={messages} />
        <Button>My button</Button>
    </>,
    document.getElementById("app")
);