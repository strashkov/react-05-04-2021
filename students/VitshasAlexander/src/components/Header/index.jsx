import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import "./style.css";

export default class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    user: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      bio: PropTypes.string,
      photo: PropTypes.string,
    }),
  };
  render() {
    const { user, title } = this.props;
    return (
      <AppBar position="static">
        <Toolbar
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">{title}</Typography>
          <Link to={`/profile`}>
            <Avatar className="header-profile-avatar">
              {profile.firstName.charAt(0)}
              {profile.lastName.charAt(0)}
            </Avatar>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}
