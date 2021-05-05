import React from "react";
import PropTypes from "prop-types";
import Header from "../../containers/Header.js";
import ChatList from "../../containers/ChatList.js";
import "./styles.css";
import "../../styles/style.css";

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
