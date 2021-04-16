import { List } from "@material-ui/core";
import React from "react";
import "../../../../styles/style.css";
import Chat from "./Chat.jsx";
class ChatList extends React.Component {
  state = {
    name: ["Peter", "Vasya"],
  };
  render() {
    const chatElem = this.state.name.map((name, index) => (
      <Chat key={index} name={name} />
    ));
    return <List className="ChatList">{chatElem}</List>;
  }
}
export default ChatList;
