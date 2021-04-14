import React from "react";
import ReactDom, { render } from "react-dom";
import "./tailwind.css"

const messages = ["Geekbrains", "React", "Привет"];

class MessageField extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <li className="text-purple-700 text-xl">{this.props.message}</li>;
  }
}

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isUpdated: false };
  }

  render() {
    return (
        <ul className="list-disc mx-10 my-10">
            { this.props.messages.map((message, index) => { return <MessageField key={index} message={message} />;}) }
        </ul>
    );
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

      ReactDom.render(
        <>
          <MessageList messages={messages} />
          <Button>Нажми меня</Button>
        </>,
        document.getElementById("app")
      );
    };
    return (
      <button className = "mx-4 my-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={handleClick}>
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
