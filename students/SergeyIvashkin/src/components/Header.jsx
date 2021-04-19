import React from "react";
import PropTypes from "prop-types";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default class Header extends React.Component {
  static propTypes = {
    chatId: PropTypes.string,
  };
  render() {
    const { chatId } = this.props;
    console.log(chatId);
    return (
      <>
        <div className="header">
          <div>
            {chatId === "profile"
              ? "Profile"
              : !chatId
              ? "Чат не выбран"
              : `Чат ${chatId}`}
          </div>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to={"/profile"} color="inherit">
              <Button> Profile</Button>
            </Link>
            <Link align="right" hidden={chatId !== "profile"} to={"/"}>
              <Button> CHAT </Button>
            </Link>
          </Breadcrumbs>
        </div>
      </>
    );
  }
}
