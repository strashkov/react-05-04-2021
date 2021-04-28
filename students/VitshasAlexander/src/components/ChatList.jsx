import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import Fab from "@material-ui/core/Fab";

export default class ChatList extends React.Component {
  static propTypes = {
    chatId: PropTypes.string,
    chats: PropTypes.object.isRequired,
    addChat: PropTypes.func.isRequired,
  };

  state = {
    chatName: "",
  };

  handleAddChatClick = () => {
    this.OnAddChat();
  };

  handleChatNameChange = (event) => {
    this.setState(() => ({
      chatName: event.target.value,
    }));
  };

  OnAddChat = () => {
    this.props.addChat(this.state.chatName);
    //debugger;
    this.setState({
      chatName: "",
    });
  };

  handleChatNameKeyUp = (event) => {
    if (event.keyCode === 13) {
      this.OnAddChat();
    }
  };

  render() {
    const { chats, chatId } = this.props;
    const { chatName } = this.state;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <List>
          {Object.entries(chats).map(([id, value]) => (
            <Link key={id} to={`/chat/${id}`}>
              <ListItem button selected={id === chatId}>
                <ListItemText primary={value.title} />
              </ListItem>
            </Link>
          ))}
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
              autoFocus={true}
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
