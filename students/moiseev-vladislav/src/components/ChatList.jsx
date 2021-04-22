import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const chats = [
  {
    id: "1",
    text: "Chat 1",
  },
  {
    id: "2",
    text: "Chat 2",
  },
  {
    id: "3",
    text: "Chat 3",
  },
];

export default class ChatList extends React.Component {
  static propTypes = {
    chatId: PropTypes.string,
  };

  render() {
    const { chatId } = this.props;
    return (
      <div className="chat-list">
        <List>
          {chats.map(({ id, text }) => (
            <Link to={`/chat/${id}`} key={id}>
              <ListItem button selected={id === chatId}>
                <div className="chat-list-icon" />
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    );
  }
}
