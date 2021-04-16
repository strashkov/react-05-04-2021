import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired
  }
  render() {
      return (
        <div
          className="message"
          style={ { alignSelf: this.props.userName === 'Робот' ?
                  'flex-start' : 'flex-end' } }
        >
        <div>{ this.props.text }</div>
        <div className="message-sender">{ this.props.userName }</div>
        </div>
      ) 
  }
}