import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import "../styles/style.css";

export default class ChatList extends React.Component {
  static propTypes = {
    chatId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    chats: PropTypes.object.isRequired,
    addChat: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
    glowChat: PropTypes.func.isRequired,
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
    const { chats } = this.props;

    return (
      <div className="chat-list">
        <List>
          {Object.entries(chats).map(([id, value]) => (
            <Link key={id} to={`/chat/${id}`}>
              <ListItem button selected={id === this.props.chatId} onClick={ () => this.handleNavigate(`/chat/${id}`) }>
                <ListItemText className='' primary={value.title} />
              </ListItem>
            </Link>
          ))}
          <ListItem>
            <TextField value={chatName} onChange={this.handleChatNameChange} />
            <button
              disabled={!chatName}
              onClick={this.handleAddChatClick}
            > Send</button>
          </ListItem>
        </List>
      </div>
    );
  }
}
