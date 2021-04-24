import React from "react";
import Header from "./Header.jsx";
import MessageField from "./MessageField.jsx";
import "../styles/style.css";
import ChatList from "./ChatList.jsx";

export default class Layout extends React.Component {
  render = () => (
    <div className="layout">
      <Header />
      <div className="main">
        <ChatList />
        <MessageField />
      </div>
    </div>
  );
}
