import React from "react";
import Header from "./Header.jsx";
import MessageField from "./MessageField.jsx";
import "../styles/style.css";
import ChatList from "./ChatList.jsx";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import EmptyMessageField from "./EmptyMessageField.jsx";
import Profile from "./Profile.jsx";

export default class Layout extends React.Component {
  static propTypes = {
    display: PropTypes.string,
    chatId: PropTypes.string,
  };

  state = {
    chats: {
      1: { title: "Чат 1", messageList: [1] },
      2: { title: "Чат 2", messageList: [2] },
      3: { title: "Чат 3", messageList: [] },
    },
    messages: {
      1: { text: "Привет!", sender: "bot" },
      2: { text: "Здравствуйте!", sender: "bot" },
    },
  };

  sendMessage = (chatId, text, sender) => {
    const { messages, chats } = this.state;
    const messageId = Object.keys(messages).length + 1;
    this.setState({
      messages: {
        ...messages,
        [messageId]: {
          text: text,
          sender: sender,
        },
      },
      chats: {
        ...chats,
        [chatId]: {
          ...chats[chatId],
          messageList: [...chats[chatId]["messageList"], messageId],
        },
      },
    });
  };

  componentDidUpdate() {
    const { display } = this.props;

    if (display === "chat") {
      this.updateChatMessages();
    }
  }

  updateChatMessages = () => {
    const { chatId } = this.props;
    const { chats, messages } = this.state;
    const messageList = chats[chatId].messageList;

    if (messageList.length > 0) {
      const lastMessage = messages[messageList[messageList.length - 1]];
      if (lastMessage.sender === "me") {
        setTimeout(() => {
          this.sendMessage(chatId, "Круто", "bot");
        }, 1000);
      }
    }
  };

  getComponentForDisplay = () => {
    const { chatId, display } = this.props;
    const { chats, messages } = this.state;
    switch (display) {
      case "chat":
        return (
          <MessageField
            messages={chats[chatId].messageList.map(
              (messageId) => messages[messageId]
            )}
            sendMessage={this.sendMessage}
            chatId={chatId}
          />
        );
      case "profile":
        return <Profile />;
      default:
        return <EmptyMessageField />;
    }
  };

  getHeaderText = () => {
    const { chatId, display } = this.props;
    switch (display) {
      case "chat":
        return "Чат " + chatId;
      case "profile":
        return "Профиль";
      default:
        return "Чат не выбран";
    }
  };

  render() {
    const { chatId } = this.props;

    return (
      <Container className="layout">
        <Header text={this.getHeaderText()} />
        <div className="content">
          <ChatList chatId={chatId} />
          {this.getComponentForDisplay()}
        </div>
      </Container>
    );
  }
}
