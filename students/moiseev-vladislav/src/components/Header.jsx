import React from "react";
import PropTypes from "prop-types";
import Fab from "@material-ui/core/Fab";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  static propTypes = {
    text: PropTypes.string,
  };

  render() {
    const { text } = this.props;
    return (
      <div className="header">
        <Link to={`/profile`}>
          <Fab color="primary">
            <AccountCircleIcon fontSize="large" />
          </Fab>
        </Link>
        <div>{text}</div>
      </div>
    );
  }
}
