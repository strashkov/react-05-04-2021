import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
  
  render() {
     return <div>{ this.props.userName }: { this.props.text }</div>
  }
}
Message.propTypes = {
  text: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired
}