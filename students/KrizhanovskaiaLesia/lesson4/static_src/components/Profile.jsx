import React from "react";
import { Link } from "react-router-dom";

export default class Profile extends React.Component {
  render() {
    return (
      <Link to="/profile/">
        <div>Профиль</div>
      </Link>
    );
  }
}
