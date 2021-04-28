import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';

export default class Message extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        sender: PropTypes.string.isRequired
    }
    render() {
        return (
            <Paper className="message" style={{alignSelf:this.props.sender === 'bot' ? 'flex-start' : 'flex-end'}}>
                {this.props.text}
                <span>{this.props.sender}</span>
            </Paper>
        )
    }
}
