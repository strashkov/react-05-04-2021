import React from "react";
import PropTypes from "prop-types";
import MessageField from "./MessageField.jsx";
import ChatList from "./ChatList.jsx";
import Header from "./Header.jsx";
import { Link } from "react-router-dom";

export default class Layout extends React.Component {
  static propTypes = {
    chatId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    profile: PropTypes.string,
  };

  static defaultProps = {
    chatId: 1,
  };

  render() {
    return (
      <div className="main-layout">
        <Header chatId={this.props.chatId} />
        <Link to="/profile/">
          <div>Профиль</div>
        </Link>
        <div className="chat">
          <ChatList />
          <MessageField chatId={this.props.chatId} />
        </div>
      </div>
    );
  }
}
