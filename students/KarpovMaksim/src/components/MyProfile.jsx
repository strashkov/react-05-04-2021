import React from 'react';
import { Link } from 'react-router-dom';
export default class Myprofile extends React.Component {

  render() {
    return (
      <div className='profile'>My profile
      <Link to={'/'}>Back to chats page</Link>
      </div>
    )
  }
}