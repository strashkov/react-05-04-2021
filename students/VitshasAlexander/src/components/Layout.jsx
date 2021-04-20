import React from "react";
import PropTypes from "prop-types";

import Container from "@material-ui/core/Container";
import Header from "./Header.jsx";
import MessageFields from "./MessageFields.jsx";

import ChatList from "./ChatList.jsx";

const listOfChats = [
  {
    id: "1",
    text: "Chat 1",
    messages: [
      { text: "Geekbrains 1", sender: "robot" },
      { text: "React", sender: "robot" },
      { text: "Привет", sender: "robot" },
    ],
  },
  {
    id: "2",
    text: "Chat 2",
    messages: [
      { text: "Geekbrains 2", sender: "robot" },
      { text: "React", sender: "robot" },
      { text: "Привет", sender: "robot" },
    ],
  },
  {
    id: "3",
    text: "Chat 3",
    messages: [
      { text: "Geekbrains 3", sender: "robot" },
      { text: "React", sender: "robot" },
      { text: "Привет", sender: "robot" },
    ],
  },
];

export default class Layout extends React.Component {
  static propTypes = {
    chatId: PropTypes.string,
  };
  render() {
    const { chatId } = this.props;
    const chat = listOfChats.filter((chat) => chat.id == chatId);
    return (
      <Container maxWidth="md">
        <Header chatId={chatId} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "50px",
          }}
        >
          <ChatList
            chatId={listOfChats.map((chat) => {
              return { id: chat.id, text: chat.text };
            })}
          />
          <MessageFields chatArray={chat.messages} />
        </div>
      </Container>
    );
  }
}
