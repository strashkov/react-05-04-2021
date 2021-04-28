import React from "react";
import PropTypes from "prop-types";
import Header from "./Header.jsx";
import ChatList from "../containers/ChatList.js";

export default class Layout extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    chatId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    children: PropTypes.node.isRequired,
  };

  render() {
    const { chatId, children, title } = this.props;

    return (
      <div className="layout">
        <Header title={title} />
        <div className="layout-content">
          <div className="layout-content-left">
            <ChatList chatId={chatId} />
          </div>
          <div className="layout-content-right">{children}</div>
        </div>
      </div>
    );
  }
}
