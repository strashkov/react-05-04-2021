import React from "react";

export default class Profile extends React.Component {
  render() {
    return (
      <div className="field-wrapper">
        <div className="profile">
          <div>Имя: Владислав</div>
          <div>Фамилия: Моисеев</div>
          <div>О себе: Java developer</div>
        </div>
      </div>
    );
  }
}
