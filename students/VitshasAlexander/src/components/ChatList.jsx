import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import Fab from "@material-ui/core/Fab";

import FaceIcon from "@material-ui/icons/Face";

export default class ChatList extends React.Component {
  static propTypes = {
    chats: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.string, text: PropTypes.string })
    ),
    chatId: PropTypes.string,
  };
  state = {
    humanInput: "",
  };
  handleClick = () => {
    this.addChat();
  };

  addChat = () => {
    //  debugger;
    this.props.OnAddChat(this.state.humanInput);
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
      return this.addChat();
    }
  };

  render() {
    const { chats, chatId } = this.props;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <List>
          {chats.map(({ id, title }) => (
            <Link key={id} to={`/chat/${id}`}>
              <ListItem button selected={id === chatId}>
                <ListItemIcon>
                  {id % 2 ? <FaceIcon /> : <InsertEmoticonIcon />}
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItem>
            </Link>
          ))}
        </List>
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
            placeholder="Добавить новый чат"
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
