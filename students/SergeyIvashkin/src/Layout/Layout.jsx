import React from "react";
import MessageField from "../components/MessageField.jsx";
import Header from "../components/Header.jsx";
import ChatList from "../components/ChatList.jsx";
import PropTypes from "prop-types";
import Profile from "../components/Profile.jsx";

const chats = [
  {
    id: "1",
    name: "Chat 1",
  },
  {
    id: "2",
    name: "Chat 2",
  },
  {
    id: "3",
    name: "Chat 3",
  },
];

export default class Layout extends React.Component {
  static propTypes = {
    chatId: PropTypes.string,
  };

  // state = {
  //   messages: {
  //     1: [
  //       {
  //         author: "me",
  //         message: "Привет!",
  //       },
  //       {
  //         author: "me",
  //         message: "Как дела?",
  //       },
  //     ],
  //     2: [
  //       {
  //         author: "me",
  //         message: "чат 2",
  //       },
  //     ],
  //     3: [
  //       {
  //         author: "me",
  //         message: "чат 3",
  //       },
  //     ],
  //   },
  // };

  render() {
    const { chatId } = this.props;
    console.log(this.props);
    return (
      <>
        <Header chatId={chatId} />

        {chatId === "profile" ? (
          <Profile />
        ) : (
          <div className="content">
            <ChatList chatId={chatId} chats={chats} />
            <MessageField chatId={chatId} />
          </div>
        )}
      </>
    );
  }
}
