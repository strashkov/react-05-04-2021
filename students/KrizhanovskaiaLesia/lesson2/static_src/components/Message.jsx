import React from "react";
import PropTypes from "prop-types";

export default class Message extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <div>{this.props.text}</div>
        <span>Send by: {this.props.author}</span>
      </div>
    );
  }
}
