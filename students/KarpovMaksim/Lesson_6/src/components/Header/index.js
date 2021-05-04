import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string
  }
  render() {
    const { title } = this.props;
    return <div className="header">
      <Typography style={{marginLeft: '20px', marginTop: '5px', height: '100vh', fontSize: '20px' }}>
        { title }
      </Typography>
      <Link to={'/profile/'}>My profile</Link>
    </div>
  }
}