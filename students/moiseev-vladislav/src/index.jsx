import React from "react";
import ReactDOM from "react-dom";

let messages = ["Привет", "Как дела?"];

class MessagesComponent extends React.Component {
  constructor() {
    super();
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }

  forceUpdateHandler() {
    messages.push("Нормально");
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <button onClick={this.forceUpdateHandler}>push!</button>
        {this.props.messages.map((message) => (
          <div>{message}</div>
        ))}
      </div>
    );
  }
}

ReactDOM.render(
  <MessagesComponent messages={messages} />,
  document.getElementById("root")
);
