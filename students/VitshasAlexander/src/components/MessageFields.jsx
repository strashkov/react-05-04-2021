import React from "react";
import PropTypes from "prop-types";

import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";

import Message from "./Message";

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
    chatId: PropTypes.string,
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

  handleSendMessage = (
    message,
    sender = "human",
    chatId = this.props.chatId
  ) => {
    const messageId = Object.keys(this.props.messages).length + 1;
    //    const { chatId } = this.props;
    //debugger;
    this.props.sendMessage(message, sender, messageId, chatId);

    if (sender !== "robot")
      setTimeout(
        () =>
          this.handleSendMessage(
            answers[Math.floor(Math.random() * answers.length)],
            "robot",
            chatId
          ),
        1000
      );
  };

  handleClick = () => {
    this.sendMessage();
  };

  sendMessage = () => {
    //  debugger;
    this.handleSendMessage(this.state.humanInput);
    this.setState({
      humanInput: "",
    });
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
    //    debugger;
    const activeMessages = chats[chatId].messageList.map((messageId) => {
      return messages[messageId];
    });
    //debugger;
    const messageElements = activeMessages.map(({ text, sender }, index) => (
      <Message key={index} text={text} sender={sender} />
    ));
    return (
      <div style={{ display: "flex", flexDirection: "column", width: "80%" }}>
        <div
          ref={this.messageFieldRef}
          style={{ display: "flex", flexDirection: "column", width: "85%" }}
        >
          {messageElements}
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
            autoFocus={true}
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
