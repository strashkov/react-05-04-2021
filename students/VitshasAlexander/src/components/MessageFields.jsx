import React from "react";
import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";

import Message from "./Message.jsx";

export default class MessageFields extends React.Component {
  state = {
    messages: [
      { text: "Geekbrains", sender: "robot" },
      { text: "React", sender: "robot" },
      { text: "Привет", sender: "robot" },
    ],
    humanInput: "",
    answerInProgress: false,
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
    if (
      this.state.messages[this.state.messages.length - 1].sender != "robot" &&
      !this.state.answerInProgress
    ) {
      this.setState(() => ({
        answerInProgress: true,
      }));

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
            answerInProgress: false,
          })),
        1000
      );
    }
  }
  handleClick = () => {
    this.sendMessage();
  };

  sendMessage = () => {
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

  handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      event.target.value = "";
      return this.handleClick();
    }
  };

  render() {
    const messageElements = this.state.messages.map((message, index) => (
      <Message key={index} text={message.text} sender={message.sender} />
    ));

    return (
      <div style={{ display: "flex", flexDirection: "column", width: "80%" }}>
        <div style={{ display: "flex", flexDirection: "column", width: "85%" }}>
          {" "}
          {messageElements}{" "}
        </div>
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TextField
            type="text"
            autoFocus={ true }
            placeholder="Введите что-нибудь"
            value={this.state.humanInput}
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
            style={{ width: "85%" }}
          />
          <Fab disabled={!this.state.humanInput} onClick={this.handleClick}>
            <SendIcon />
          </Fab>
        </div>
      </div>
    );
  }
}
