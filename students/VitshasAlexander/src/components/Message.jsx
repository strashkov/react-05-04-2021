import React from "react";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import AndroidIcon from "@material-ui/icons/Android";
import FaceIcon from "@material-ui/icons/Face";

export default class Message extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
  };
  render() {
    const commonStyle = {
      marginTop: "10px",
    }
    return (
      <div
        width="50%"
        style={
          this.props.sender === "robot"
            ? { ...commonStyle, alignSelf: "flex-start" }
            : { ...commonStyle, alignSelf: "flex-end" }
        }
      >
        <Chip
          variant={this.props.sender === "robot" ? "outlined" : "default"}
          color="primary"
          label={this.props.text}
          icon={this.props.sender === "robot" ? <AndroidIcon /> : <FaceIcon />}
        />
      </div>
    );
  }
}
