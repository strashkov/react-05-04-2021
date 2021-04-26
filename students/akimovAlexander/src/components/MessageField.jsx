import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message.jsx';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import '../styles/style.css';
import { sendMessage } from '../actions/messageActions';
import { connect } from 'react-redux';

export default class MessageField extends React.Component {
    static propTypes = {
        messages: PropTypes.arrayOf(PropTypes.shape({
            sender: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })),
        onSendMessage: PropTypes.func.isRequired
    };
    state = {
        input: ''
    };

    constructor(props) {
        super(props);
        this.messageFieldRef = React.createRef();
    }

    componentDidUpdate(prevProps, prevState) {
        this.messageFieldRef.current.scrollTop = this.messageFieldRef.current.scrollHeight - this.messageFieldRef.current.clientHeight;
    }

    sendMessage = () => {
        this.props.onSendMessage(this.state.input);

        this.setState({
            input: ''
        });
    };

    handleClick = () => {
        this.sendMessage();
    };

    handleChangeInput = ({ target: { value } }) => {
        console.log(value);
        this.setState({
            input: /*event.target.value*/value
        })
    };

    handleInputKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.sendMessage();
        }
    }

    render() {
        const messageElements = this.props.messages.map(({ text, sender }, index) => (
            <Message key={index} text={text} sender={sender} />)
        );


        return (
            <div className="message-field-wrapper">
                <div ref={this.messageFieldRef} className="message-field">
                    {messageElements}
                </div>
                <div className='actions'>
                    <TextField
                        value={this.state.input}
                        onChange={this.handleChangeInput}
                        onKeyUp={this.handleInputKeyUp}
                        autoFocus
                        placeholder='Message'
                        fullWidth
                        type='text' />
                    <Fab
                        disabled={this.state.input === ''}
                        onClick={this.handleClick}
                    ><SendIcon />
                    </Fab>
                </div>
            </div>
        )
    }
}