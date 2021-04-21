import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import CommunicationChatBubble from "material-ui/svg-icons/communication/chat-bubble";

export default class ChatList extends React.Component {
  render() {
    return (
      <div>
        <List>
          <Subheader>Недавние</Subheader>
          <Link to="/chat/1/">
            <ListItem
              primaryText="Мама"
              rightIcon={<CommunicationChatBubble />}
            />
          </Link>
          <Link to="/chat/2/">
            <ListItem
              primaryText="Босс"
              rightIcon={<CommunicationChatBubble />}
            />
          </Link>
          <Link to="/chat/3/">
            <ListItem
              primaryText="Репетитор"
              rightIcon={<CommunicationChatBubble />}
            />
          </Link>
        </List>
      </div>
    );
  }
}
