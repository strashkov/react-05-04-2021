import React from "react";
import PropTypes from "prop-types";

import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

import "./style.css";

export default class Message extends React.Component {
  static propTypes = {
    messageId: PropTypes.number.isRequired,
    chatId: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
    deleteMessage: PropTypes.func.isRequired,
  };
  handleDeleteMessage = () => {
    const { chatId, messageId } = this.props;
    // this.props.deleteMessage({ messageId, chatId });
    console.log(`Попытка удалить сообщение ${messageId} из чата ${chatId}`);
  };
  render() {
    return (
      <div
        className="message"
        style={{
          alignSelf: this.props.sender === "bot" ? "flex-start" : "flex-end",
        }}
      >
        <div> {this.props.text} </div>
        <div className="message-sender">
          {this.props.messageId}:{this.props.sender}
          <IconButton aria-label="delete" onClick={this.handleDeleteMessage()}>
            <DeleteIcon fontSize="small" />
          </IconButton>
          {/* <Button onClick={this.handleDeleteMessage()}>
            <DeleteIcon />
          </Button> */}
        </div>
      </div>
    );
  }
}
