import React from "react";
import PropTypes from "prop-types";

export default class Header extends React.Component {
  static propTypes = {
    chatId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };

  static defaultProps = {
    chatId: 1,
  };

  render() {
    return (
      <div
        style={{
          width: "100%",
          paddingBottom: 30,
          textAlign: "center",
        }}
      >
        <span style={{ fontSize: "20px" }}>
          {this.props.chatId === "profile"
            ? "Profile"
            : "Чат " + this.props.chatId}
        </span>
      </div>
    );
  }
}
