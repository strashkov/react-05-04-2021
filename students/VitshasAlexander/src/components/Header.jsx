import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default class Header extends React.Component {
  static propTypes = {
    chatId: PropTypes.string,
    showProfile: PropTypes.bool,
  };
  render() {
    return (
      <AppBar position="static">
        <Toolbar
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">
            Geekbrains messenger.{" "}
            {this.props.showProfile
              ? "Профиль пользователя"
              : "Чат " + (this.props.chatId || "не выбран")}
          </Typography>
          <Link to={`/profile`}>
            <AccountCircleIcon style={{ color: "white" }} />
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}
