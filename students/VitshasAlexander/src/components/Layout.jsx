import React from "react";
import PropTypes from "prop-types";

import Container from "@material-ui/core/Container";
import Header from "./Header.jsx";
import MessageFields from "./MessageFields.jsx";

import ChatList from "./ChatList.jsx";
import Profile from "./Profile.jsx";

const answers = [
  "Не приставай ко мне, я робот!",
  "Сириус — ярчайшая звезда ночного неба",
  "Какие люди!!! Как дела, бро?",
  "Люди - странные существа, которых не понять",
  "Как ты выживаешь в этом мире?",
  "Я просто тоже тролль",
  "Извините, я — робот",
  "Нет смысла в чувствах... это лишь та боль и те страдания, которые есть внутри некоторых нас",
];

export default class Layout extends React.Component {
  static propTypes = {
    chatId: PropTypes.string,
    showProfile: PropTypes.bool,
  };

  static defaultProps = {
    showProfile: false,
  };

  state = {
    messages: {
      1: {
        sender: "robot",
        text: "Привет!",
      },
      2: {
        sender: "robot",
        text: "Geekbrains",
      },
      3: {
        sender: "robot",
        text: "React",
      },
    },
    chats: {
      1: {
        title: "Chat 1",
        messageList: [1],
      },
      2: {
        title: "Chat 2",
        messageList: [1, 2],
      },
      3: {
        title: "Chat 3",
        messageList: [3],
      },
    },
  };

  OnSendMessage = (sender, message) => {
    const { messages, chats } = this.state;
    const { chatId } = this.props;

    const messageId = Object.keys(messages).length + 1;

    this.setState({
      messages: { ...messages, [messageId]: { text: message, sender: sender } },
      chats: {
        ...chats,
        [chatId]: {
          ...chats[chatId],
          messageList: [...chats[chatId]["messageList"], messageId],
        },
      },
    });

    if (sender != "robot")
      setTimeout(
        () =>
          this.OnSendMessage(
            "robot",
            answers[Math.floor(Math.random() * answers.length)]
          ),
        1000
      );
  };

  OnAddChat = (title) => {
    const { chats } = this.state;
    const chatId = Object.keys(chats).length + 1;

    this.setState({
      chats: {
        ...chats,
        [chatId]: { title: title, messageList: [] },
      },
    });
  };

  render() {
    const { chatId, showProfile } = this.props;
    const { chats, messages } = this.state;
    const messageArr = Object.fromEntries(
      Object.entries(messages).filter(([key, obj]) =>
        chats[chatId ? chatId : 1].messageList.find((item) => item == key)
          ? { sender: obj.sender, text: obj.text }
          : ""
      )
    );
    return (
      <Container maxWidth="md">
        <Header chatId={chatId} showProfile={showProfile} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "50px",
          }}
        >
          <ChatList
            chats={Object.entries(chats).map(([key, obj]) => ({
              id: key,
              title: obj.title,
            }))}
            chatId={chatId}
            OnAddChat={this.OnAddChat}
          />
          {showProfile ? (
            <Profile />
          ) : (
            <MessageFields
              messages={messageArr}
              chatId={chatId}
              OnSendMessage={this.OnSendMessage}
            />
          )}
        </div>
      </Container>
    );
  }
}
