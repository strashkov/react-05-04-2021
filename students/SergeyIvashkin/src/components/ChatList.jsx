import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChatIcon from "@material-ui/icons/Chat";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class ChatList extends React.Component {
  static propTypes = {
    chatId: PropTypes.string,
    chats: PropTypes.array,
  };

  render() {
    const { chatId, chats } = this.props;
    return (
      <div className="chat-list">
        <List>
          {chats.map(({ name, id }) => (
            <Link underline="none" key={id} to={`/chat/${id}`}>
              <ListItem button selected={id === this.props.chatId}>
                <ListItemIcon>
                  <ChatIcon />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    );
  }
}
