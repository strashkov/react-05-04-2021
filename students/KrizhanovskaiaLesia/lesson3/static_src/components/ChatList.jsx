import React from "react";
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import CommunicationChatBubble from "material-ui/svg-icons/communication/chat-bubble";

export default class ChatList extends React.Component {
  render() {
    return (
      <div>
        <List>
          <Subheader>Недавние</Subheader>
          <ListItem
            primaryText="Мама"
            rightIcon={<CommunicationChatBubble />}
          />
          <ListItem
            primaryText="Папа"
            rightIcon={<CommunicationChatBubble />}
          />
          <ListItem
            primaryText="Босс"
            rightIcon={<CommunicationChatBubble />}
          />
          <ListItem
            primaryText="Репетитор"
            rightIcon={<CommunicationChatBubble />}
          />
          <ListItem
            primaryText="Доставка"
            rightIcon={<CommunicationChatBubble />}
          />
        </List>
      </div>
    );
  }
}
