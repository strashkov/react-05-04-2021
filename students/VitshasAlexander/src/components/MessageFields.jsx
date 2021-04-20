import React from "react";
import PropTypes from "prop-types";

import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";

import Message from "./Message.jsx";

export default class MessageFields extends React.Component {
  static propTypes = {
    messages: PropTypes.shape({
      id: PropTypes.string,
      message: PropTypes.shape({
        sender: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
      chatId: PropTypes.string,
      OnSendMessage: PropTypes.func,
    }),
  };
  state = {
    humanInput: "",
  };

  handleClick = () => {
    this.sendMessage();
  };

  sendMessage = () => {
    //  debugger;
    this.props.OnSendMessage("human", this.state.humanInput);
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
    const { messages, chatId } = this.props;
    const messageElements = chatId
      ? Object.entries(messages).map(([key, message]) => (
          <Message key={key} text={message.text} sender={message.sender} />
        ))
      : "Чат не выбран";
    //    debugger;
    return (
      <div style={{ display: "flex", flexDirection: "column", width: "80%" }}>
        <div style={{ display: "flex", flexDirection: "column", width: "85%" }}>
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
            disabled={!chatId}
          />
          <Fab disabled={!this.state.humanInput} onClick={this.handleClick}>
            <SendIcon />
          </Fab>
        </div>
      </div>
    );
  }
}
