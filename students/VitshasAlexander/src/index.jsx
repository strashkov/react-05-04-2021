import React from "react";
import ReactDom, { render } from "react-dom";
import "./tailwind.css"

const messages = ["Geekbrains", "React", "Привет"];

class MessageField extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="message">{this.props.message}</div>;
  }
}

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isUpdated: false };
  }

  render() {
    return this.props.messages.map((message, index) => {
      return <MessageField key={index} message={message} />;
    });
    
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const handleClick = (event) => {
      messages.push("More");
      console.log(messages);
    };
    return (
      <button className = "px-4 py-2 bg-blue-600 text-white rounded" onClick={handleClick}>
        {this.props.children}
      </button>
    );
  }
}

ReactDom.render(
  <>
    <MessageList messages={messages} />
    <Button>Нажми меня</Button>
  </>,
  document.getElementById("app")
);
