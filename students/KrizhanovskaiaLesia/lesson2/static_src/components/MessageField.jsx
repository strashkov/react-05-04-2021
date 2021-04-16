import React from "react";
import Message from "./Message.jsx";

export default class MessageField extends React.Component {
  state = {
    messages: [
      {
        text: "Привет!",
        author: "Бот",
      },
      {
        text: "Как дела?",
        author: "Бот",
      },
    ],
  };

  handleClick = () => {
    this.setState({
      messages: [
        ...this.state.messages,
        {
          text: "Нормально",
          author: "Пользователь",
        },
      ],
    });
  };

  componentDidUpdate() {
    const { messages } = this.state;
    if (messages.length > 0 && messages[messages.length - 1].author !== "Бот") {
      setTimeout(
        () =>
          this.setState({
            messages: [
              ...this.state.messages,
              {
                text: "Не приставай ко мне, я робот!",
                author: "Бот",
              },
            ],
          }),
        1000
      );
    }
  }

  render() {
    const messageElements = this.state.messages.map(
      ({ text, author }, index) => (
        <Message key={index} text={text} author={author} />
      )
    );

    return (
      <div>
        {messageElements}
        <button onClick={this.handleClick}>Отправить сообщение</button>
      </div>
    );
  }
}
