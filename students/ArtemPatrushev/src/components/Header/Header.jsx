import React from 'react';
import PropTypes from 'prop-types';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
  static propTypes = {
    chatId: PropTypes.string
  };

  render() {
    return (
      <div className={s.header}>
        <div className={s.messagerContainer}>
          <NavLink className={s.headerText} to='/profile'>Profile</NavLink>
          <p className={s.headerText}>Chat {this.props.chatId || "don't selected"}</p>
        </div>
      </div>
    )
  };
}