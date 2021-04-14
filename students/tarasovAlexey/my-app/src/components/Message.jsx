import React from 'react';
import PropTypes from 'prop-types';
import classes from "./MessageField.module.css";

export default class Message extends React.Component {
    static propTypes = {
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    };

    render() {
        return <div className={classes.message}> { this.props.author +": " + this.props.text }</div>
    }
}
