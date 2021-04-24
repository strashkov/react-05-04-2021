import React from "react";
import PropTypes from "prop-types";

import Container from "@material-ui/core/Container";

import Header from "../../containers/Header";
import ChatList from "../../containers/ChatList";

import "./style.css";

export default class Layout extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    chatId: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { chatId, children, title } = this.props;

    return (
      <Container maxWidth="md" className="layout">
        <Header title={title} />
        <div className="layout-content">
          <div layout-content-left>
            <ChatList chatId={chatId} />
          </div>
          <div className="layout-content-right">{children}</div>
        </div>
      </Container>
    );
  }
}
