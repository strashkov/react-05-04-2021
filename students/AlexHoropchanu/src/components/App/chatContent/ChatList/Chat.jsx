import { ListItem } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import "../../../../styles/style.css";
class Chat extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };
  render() {
    return (
      <ListItem>
        <h3>{this.props.name}</h3>
      </ListItem>
    );
  }
}
export default Chat;
