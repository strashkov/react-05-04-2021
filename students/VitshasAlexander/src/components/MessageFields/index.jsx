import React from "react";
import PropTypes from "prop-types";

import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";

import Message from "../Message";
import "./style.css";

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

export default class MessageFields extends React.Component {
  static propTypes = {
    chats: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired,
    sendMessage: PropTypes.func.isRequired,
    chatId: PropTypes.string.isRequired,
  };

  state = {
    humanInput: "",
  };

  constructor(props) {
    super(props);

    this.messageFieldRef = React.createRef();
  }

  componentDidUpdate() {
    this.messageFieldRef.current.scrollTop =
      this.messageFieldRef.current.scrollHeight -
      this.messageFieldRef.current.clientHeight;
  }

  sendMessage = () => {
    const { humanInput } = this.state;

    if (!input) return;

    const { chatId, message } = this.props;
    const messageId = Object.keys(this.props.messages).length + 1;
    this.props.sendMessage({
      message: input,
      sender: "robot",
      messageId,
      chatId,
    });

    this.setState({
      humanInput: "",
    });

    setTimeout(() => {
      const { messages } = this.props;
      const messageId = Object.keys(messages).length + 1;
      this.props.sendMessage({
        message: answers[Math.floor(Math.random() * answers.length)],
        sender: "robot",
        chatId,
        messageId,
      });
    }, 1000);
  };

  handleClick = () => {
    this.sendMessage();
  };

  handleChange = (event) => {
    this.setState(() => ({
      humanInput: event.target.value,
    }));
  };

  handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      return this.sendMessage();
    }
  };

  render() {
    const { chats, chatId, messages } = this.props;
    const messageElements = chats[chatId].messageList.map((messageId) => {
      const { text, sender } = messages[messageId];
      return <Message key={messageId} text={text} sender={sender} />;
    });

    return (
      <>
        <div ref={this.messageFieldRef} className="message-field">
          {messageElements}
        </div>
        <div className="actions">
          <TextField
            style={{ marginRight: "12px" }}
            fullWidth
            type="text"
            autoFocus
            placeholder="Введите что-нибудь"
            value={this.state.humanInput}
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
            style={{ width: "85%" }}
          />
          <Fab
            color="primary"
            disabled={!this.state.humanInput}
            onClick={this.handleClick}
          >
            <SendIcon />
          </Fab>
        </div>
      </>
    );
  }
}
