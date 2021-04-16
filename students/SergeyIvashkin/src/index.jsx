import React from "react";
import ReactDom from "react-dom";

// const element = React.createElement(
//   "div",
//   {
//     className: "my-class",
//     id: "my-id",
//   },
//   "React JS"
// );

// const element = (
//   <div id="my-id" className="my-class">
//     Hello
//   </div>
// );

// ReactDom.render(element, document.getElementById("app"));



const messages = [
  'Hi', 'Hay!', 'Ура'
];

const Message = ({ message }) => {
  return (
      <div className="message">{message}</div>
  );
};

const MessageList = ({ messages }) => {
  return messages.map((message, index) => {
      return <Message message={message} key={index} />
  })
};



const Button = (props) => {
  const handleClick = () => {
      messages.push('New message')
      ReactDom.render(
          <>
              <MessageList messages={messages} />
              <Button>Push</Button>
          </>,
          document.getElementById('app')
      );
  }
  return <button onClick={handleClick} style={{ color: '#f77' }}>{ props.children } </button>
};

ReactDom.render(
  <>
      <MessageList messages={messages} />
      <Button>Push</Button>
  </>,
  document.getElementById('app')
)