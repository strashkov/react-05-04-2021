import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import PropTypes from "prop-types";
import { IconButton } from "@material-ui/core";
import "./style.css";

export default class ChatList extends React.Component {
  static propTypes = {
    chatId: PropTypes.string,
    chats: PropTypes.object.isRequired,
    addChat: PropTypes.func.isRequired,
    push: PropTypes.func,
  };

  state = {
    chatName: "",
  };

  handleChatNameChange = (event) => {
    this.setState({
      chatName: event.target.value,
    });
  };

  handleAddChatClick = () => {
    this.props.addChat(this.state.chatName);
    this.setState({
      chatName: "",
    });
  };

  handleNavigate = (link) => {
    this.props.push(link);
  };

  render() {
    const { chatName } = this.state;
    const { chatId, chats } = this.props;
    return (
      <div className="chat-list">
        <List>
          {Object.entries(chats).map(([id, value]) => (
            <ListItem
              key={id}
              button
              selected={id === chatId}
              className={value.highlight === true ? "glow" : ""}
              onClick={() => this.handleNavigate(`/chat/${id}`)}
            >
              <div className="chat-list-icon" />
              <ListItemText primary={value.title} />
            </ListItem>
          ))}
          <ListItem>
            <TextField value={chatName} onChange={this.handleChatNameChange} />
            <IconButton onClick={this.handleAddChatClick} disabled={!chatName}>
              <SendIcon />
            </IconButton>
          </ListItem>
        </List>
      </div>
    );
  }
}
