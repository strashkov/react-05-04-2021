import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default class ChatList extends React.Component {
  render = () => (
    <div className="chat-list">
      <h3>Chat list</h3>
      <List>
        <ListItem button>
          <ListItemText primary="Chat 1" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Chat 2" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Chat 3" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Chat 4" />
        </ListItem>
      </List>
    </div>
  );
}
