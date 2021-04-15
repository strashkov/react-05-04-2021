import React from "react";
import MessageField from "./MessageField.jsx";
import ChatList from "./ChatList.jsx";
import Header from "./Header.jsx";

export default class Layout extends React.Component {
  render() {
    return (
      <div className="main-layout">
        <Header />
        <div className="chat">
          <ChatList />
          <MessageField />
        </div>
      </div>
    );
  }
}
