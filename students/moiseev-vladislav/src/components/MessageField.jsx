import React from "react";
import Message from "./Message.jsx";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";

export default class MessageField extends React.Component {
  state = {
    messages: [
      {
        text: "Привет",
        sender: "bot",
      },
      {
        text: "Как дела?",
        sender: "bot",
      },
    ],
    input: "",
  };

  constructor(props) {
    super(props);
    this.messageFieldRef = React.createRef();
  }

  sendMessage = () => {
    this.setState((state) => ({
      messages: [
        ...state.messages,
        {
          text: this.state.input,
          sender: "me",
        },
      ],
      input: "",
    }));
  };

  handleButtonKeyUp = ({ keyCode }) => {
    if (keyCode === 13 && this.state.input !== "") {
      this.sendMessage();
    }
  };

  handleChangeInput = ({ target: { value } }) => {
    this.setState({
      input: value,
    });
  };

  componentDidUpdate() {
    setTimeout(() => {
      const { messages } = this.state;
      if (messages[messages.length - 1].sender !== "bot") {
        this.setState((state) => ({
          messages: [
            ...state.messages,
            {
              text: "Круто!",
              sender: "bot",
            },
          ],
        }));
      }
    }, 1000);
    const { scrollHeight, clientHeight } = this.messageFieldRef.current;
    this.messageFieldRef.current.scrollTop = scrollHeight - clientHeight;
  }

  render = () => {
    const messages = this.state.messages.map(({ text, sender }, index) => (
      <Message key={index} sender={sender} text={text} />
    ));
    return (
      <div className="message-field">
        <div ref={this.messageFieldRef} className="message-list">
          {messages}
        </div>
        <div className="actions">
          <TextField
            placeholder="Введите сообщение"
            value={this.state.input}
            type="text"
            onChange={this.handleChangeInput}
            onKeyUp={this.handleButtonKeyUp}
            autoFocus
            fullWidth
          />
          <Fab disabled={!this.state.input} onClick={this.sendMessage}>
            <SendIcon />
          </Fab>
        </div>
      </div>
    );
  };
}
