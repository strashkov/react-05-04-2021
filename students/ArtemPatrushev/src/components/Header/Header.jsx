import React from 'react';
import PropTypes from 'prop-types';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    profile: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired
    }).isRequired
  };

  render() {

    const { profile, title } = this.props;

    return (
      <div className={s.header}>
        <div className={s.messagerContainer}>
          <NavLink className={s.headerText} to='/profile'>Profile: {profile.firstName} {profile.lastName}</NavLink>
          <p className={s.headerText}>{title}</p>
        </div>
      </div>
    )
  };
}