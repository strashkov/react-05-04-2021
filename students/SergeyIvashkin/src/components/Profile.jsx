import React from "react";
import PropTypes from "prop-types";

export default class Profile extends React.Component {
  static propTypes = {
    chatId: PropTypes.string,
  };

  render() {
    const { chatId } = this.props;
    return (
      <>
        {/* <Header /> */}
        <div>111</div>
        <div>111</div>
        <div>111</div>
      </>
    );
  }
}
