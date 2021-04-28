import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export default class Profile extends React.Component {
  static propTypes = {
    firstName: PropTypes.string,
    secondName: PropTypes.string,
    email: PropTypes.string,
    description: PropTypes.string,
  };

  render() {
    const { firstName, secondName, email, description } = this.props;

    return (
      <div className="field-wrapper">
        <div className="profile">
          <div>Имя: {firstName}</div>
          <div>Фамилия: {secondName}</div>
          <div>Email: {email}</div>
          <div>О себе: {description}</div>
        </div>
      </div>
    );
  }
}
