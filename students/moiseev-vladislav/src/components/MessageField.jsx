import React from "react";
import Message from "./Message.jsx";

const INIT_MESSAGES = [
  {
    author: "человек",
    text: "Привет",
  },
  {
    author: "человек",
    text: "Как дела?",
  },
];

const CLICK_MESSAGE = {
  author: "человек",
  text: "Нормально",
};

const ROBOT_MESSAGE = {
  author: "робот",
  text: "Круто!",
};

export default class MessageField extends React.Component {
  state = {
    messages: INIT_MESSAGES,
  };

  handleClick = () => {
    this.setState((state) => ({
      messages: [...state.messages, CLICK_MESSAGE],
    }));
  };

  componentDidUpdate() {
    const messages = this.state.messages;
    if (messages[messages.length - 1] !== ROBOT_MESSAGE) {
      this.setState((state) => ({
        messages: [...state.messages, ROBOT_MESSAGE],
      }));
    }
  }

  render = () => {
    const messages = this.state.messages.map((message, index) => (
      <Message key={index} author={message.author} text={message.text} />
    ));
    return (
      <div>
        <button onClick={this.handleClick}>Отправить сообщение</button>
        {messages}
      </div>
    );
  };
}
