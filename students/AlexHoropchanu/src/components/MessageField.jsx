import React from "react";
import Message from "./Message.jsx";

export default class MessageField extends React.Component {
  state = {
    robot: "robot: ",
    autor: "autor: ",
    messages: ["Привет!", "Как дела?"],
    input: "",
  };

  componentDidUpdate() {
    let messages = this.state.messages;
    if (
      messages[messages.length - 1] !==
        `${this.state.robot}Не приставай ко мне, я робот!` &&
      this.state.messages[messages.length - 1] !==
        `${this.state.robot}Как дела?` &&
      messages[messages.length - 1] !== `Не приставай ко мне, я робот!` &&
      messages[messages.length - 1] !== `Как дела?`
    ) {
      setTimeout(() =>
        this.setState((state) => ({
          messages: [
            ...state.messages,
            state.robot + "Не приставай ко мне, я робот!",
          ],
        }))
      );
    }
  }

  handleClick = () => {
    if (this.state.input) {
      this.setState((state) => ({
        messages: state.messages.concat(
          state.autor + state.input
        ) /*[
                ...state.messages,
                'Нормально'
            ]*/,
      }));
    }
  };
  handleKeyUp = (event) => {
    if (event.key == "Enter") {
      return this.handleClick();
    }
  };
  handleChange = (event) => {
    this.setState(() => ({
      input: event.target.value,
    }));
  };

  render() {
    const messageElements = this.state.messages.map((text, index) => (
      <Message key={index} text={text} />
    ));
    return (
      <div>
        {messageElements}
        <input
          value={this.state.input}
          type="textarea"
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
        />
        <button onClick={this.handleClick}>Отправить сообщение</button>
      </div>
    );
  }
}
