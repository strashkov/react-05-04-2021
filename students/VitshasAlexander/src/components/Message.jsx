import React from "react";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import AndroidIcon from "@material-ui/icons/Android";
import FaceIcon from "@material-ui/icons/Face";
// import Box from '@material-ui/core/Box';
// import sizing from '@material-ui/system/sizing';

// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';

export default class Message extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
  };
  render() {
    return (
      <div
        width="50%"
        style={
          this.props.sender === "robot"
            ? { alignSelf: "flex-start", marginTop: "10px" }
            : { alignSelf: "flex-end", marginTop: "10px" }
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
