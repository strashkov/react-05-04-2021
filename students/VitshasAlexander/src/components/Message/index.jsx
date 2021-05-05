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
    this.props.deleteMessage({ messageId, chatId });
  };
  render() {
    const { text, sender } = this.props;
    const isBot = sender === "robot";

    return (
      <div
        className="message"
        style={{
          alignSelf: isBot ? "flex-start" : "flex-end",
        }}
      >
        <div> {text} </div>
        <div className="message-sender">
          {this.props.messageId}:{sender}
          <IconButton
            aria-label="delete"
            onClick={() => {
              this.handleDeleteMessage();
            }}
            disableRipple
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
    );
  }
}
