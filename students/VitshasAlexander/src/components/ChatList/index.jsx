import React from "react";
import PropTypes from "prop-types";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import Fab from "@material-ui/core/Fab";
import Avatar from "@material-ui/core/Avatar";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import "./style.css";

export default class ChatList extends React.Component {
  static propTypes = {
    chatId: PropTypes.string,
    chats: PropTypes.object.isRequired,
    addChat: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
    goForward: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  };

  state = {
    chatName: "",
  };

  handleAddChatClick = () => {
    this.onAddChat();
  };

  handleChatNameChange = (event) => {
    this.setState(() => ({
      chatName: event.target.value,
    }));
  };

  onAddChat = () => {
    this.props.addChat(this.state.chatName);
    this.setState({
      chatName: "",
    });
  };

  handleChatNameKeyUp = (event) => {
    if (event.keyCode === 13) {
      this.onAddChat();
    }
  };

  handleLinkClick = (link) => {
    this.props.push(link);
  };

  handleBackClick = () => {
    this.props.goBack();
  };

  handleForwardClick = () => {
    this.props.goForward();
  };

  render() {
    const { chats, chatId } = this.props;
    const { chatName } = this.state;
    return (
      <div className="chat-list">
        <List>
          {Object.entries(chats).map(([id, value]) => (
            <ListItem
              key={id}
              button
              selected={id === chatId}
              onClick={() => {
                this.handleLinkClick(`/chat/${id}`);
              }}
            >
              <Avatar className="chat-list-avatar">
                {value.title.split(" ").map((w) => w.charAt(0))}
              </Avatar>
              <ListItemText primary={value.title} />
            </ListItem>
          ))}
          {/* <ListItem>
            <ArrowBackIcon onClick={this.handleBackClick()} />
            <ArrowForwardIcon onClick={this.handleForwardClick()} />
          </ListItem> */}
          <ListItem
            button
            style={{
              marginTop: "50px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              type="text"
              autoFocus
              placeholder="Добавить новый чат"
              value={chatName}
              onChange={this.handleChatNameChange}
              onKeyUp={this.handleChatNameKeyUp}
              style={{ width: "85%" }}
            />
            <Fab disabled={!chatName} onClick={this.handleAddChatClick}>
              <SendIcon />
            </Fab>
          </ListItem>
        </List>
      </div>
    );
  }
}
