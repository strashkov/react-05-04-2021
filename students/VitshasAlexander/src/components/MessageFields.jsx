import React from "react";
import Message from "./Message.jsx";

export default class MessageFields extends React.Component {
  state = {
    messages: [
      { text: "Geekbrains", sender: "robot" },
      { text: "React", sender: "robot" },
      { text: "Привет", sender: "robot" },
    ],
    humanInput: "",
  };

  componentDidUpdate() {
    const answers = [
      "Не приставай ко мне, я робот!",
      "Сириус — ярчайшая звезда ночного неба",
      "Какие люди!!! Как дела, бро?",
      "Люди - странные существа, которых не понять",
      "Как ты выживаешь в этом мире?",
      "Я просто тоже тролль",
      "Извините, я — робот",
      "Нет смысла в чувствах... это лишь та боль и те страдания, которые есть внутри некоторых нас",
    ];
    if (this.state.messages[this.state.messages.length - 1].sender != "robot") {
      setTimeout(
        () =>
          this.setState((state) => ({
            messages: [
              ...state.messages,
              {
                text: answers[Math.floor(Math.random() * answers.length)],
                sender: "robot",
              },
            ],
          })),
        1000
      );
    }
  }
  handleClick = () => {
    this.setState((state) => ({
      messages: [
        ...state.messages,
        { text: this.state.humanInput, sender: "human" },
      ],
      humanInput: "",
    }));
  };

  handleChange = (event) => {
    this.setState(() => ({
      humanInput: event.target.value,
    }));
  };

  handleKeyDown = (event) => {
    if (event.keyCode === 13 ) {
        event.target.value = "";
        return this.handleClick();
    }
}

  render() {
    const messageElements = this.state.messages.map((message, index) => (
      <Message key={index} text={message.text} sender={message.sender} />
    ));

    return (
      <>
        <ul className="list-disc mx-10 my-10">{messageElements}</ul>
        <div className="mt-1 rounded-md shadow-md max-w-xs mx-4">
          <input
            type="text"
            className="mx-4 block w-full pr-10 border-gray-900 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-lg rounded-md"
            placeholder="Введите что-нибудь"
            value={this.state.humanInput}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
        </div>
        <button
          className="my-4 mx-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          onClick={this.handleClick}
        >
          Нажми меня
        </button>
      </>
    );
  }
}
