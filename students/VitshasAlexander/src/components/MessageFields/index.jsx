import React from "react";
import PropTypes from "prop-types";

import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";

import Message from "../../containers/Message";
import "./style.css";

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

    if (!humanInput) return;

    const { chatId, messages } = this.props;
    //debugger;
    const messageId = Object.keys(messages).length + 1;
    this.props.sendMessage({
      messageId,
      chatId,
      text: humanInput,
      sender: "human",
    });

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
    const messageElements = chats[chatId].messageList.map((messageId) => {
      const { text, sender } = messages[messageId];
      return (
        <Message
          key={messageId}
          messageId={messageId}
          chatId={chatId}
          text={text}
          sender={sender}
        />
      );
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
          />
          <Fab
            color="primary"
            disabled={this.state.humanInput === ""}
            onClick={this.sendMessage}
          >
            <SendIcon />
          </Fab>
        </div>
      </>
    );
  }
}
