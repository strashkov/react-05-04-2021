import React from "react";
import { TextField, FloatingActionButton } from "material-ui";
import SendIcon from "material-ui/svg-icons/content/send";
import Message from "./Message.jsx";
import "../styles/styles.css";

export default class MessageField extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

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
    input: "",
  };

  componentDidMount() {
    this.textInput.current.focus();
  }

  handleClick = (message) => {
    this.sendMessage(message);
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleKeyUp = (event, message) => {
    if (event.keyCode === 13) {
      this.sendMessage(message);
    }
  };

  sendMessage = (message) => {
    this.setState({
      messages: [
        ...this.state.messages,
        { text: message, author: "Пользователь" },
      ],
      input: "",
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.messages.length < this.state.messages.length) {
      const lastMessage = this.state.messages[this.state.messages.length - 1];
      if (lastMessage.author !== "Бот") {
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
  }

  render() {
    const messageElements = this.state.messages.map(
      ({ text, author }, index) => (
        <Message key={index} text={text} author={author} />
      )
    );

    return (
      <div className="layout" style={{ width: "70%" }}>
        <div className="message-field">{messageElements}</div>
        <div style={{ width: "100%", display: "flex" }}>
          <TextField
            ref={this.textInput}
            name="input"
            fullWidth
            hintText="Введите сообщение"
            style={{ fontSize: "22px" }}
            onChange={this.handleChange}
            value={this.state.input}
            onKeyUp={(event) => this.handleKeyUp(event, this.state.input)}
          />
          <FloatingActionButton
            disabled={this.state.input === ""}
            onClick={() => this.handleClick(this.state.input)}
          >
            <SendIcon />
          </FloatingActionButton>
        </div>
      </div>
    );
  }
}
