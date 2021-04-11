import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
    };
    render () {
        return <li className="text-purple-700 text-xl">{ this.props.sender }: { this.props.text }</li>
    }
}