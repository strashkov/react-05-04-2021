import React from 'react';
import PropTypes from 'prop-types';
import Message from './message/Message.jsx';
import '../styles/style.css';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

export default class MessageField extends React.Component {
    static propTypes = {
        messages: PropTypes.arrayOf(PropTypes.shape({
            author: PropTypes.string.isRequired,
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
    componentDidUpdate() {        
        this.messageFieldRef.current.scrollTop =
            this.messageFieldRef.current.scrollHeight -
            this.messageFieldRef.current.clientHeight;
    }

    sendMessage = () => {
        this.props.onSendMessage(this.state.input);

        this.setState({           
            input: ''
        });
    };

    handleChangeInput = ({ target: { value } }) => {
        this.setState({
            input: value /*event.target.value*/,
        });
    };

    handleInputKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.sendMessage();
        }
    };
    render() {
        const messageElements = this.props.messages.map(({ author, text }, index) => (
            <Message key={index} text={text} author={author} />
        ));
 
        return (
            <div className='message-field-wrapper'>
                <div ref={this.messageFieldRef} className='message-field'>
                    {messageElements}
                </div>
                <div className='actions'>
                    <TextField
                        placeholder='Your message'
                        fullWidth
                        value={this.state.input}
                        type='text'
                        autoFocus
                        onKeyUp={this.handleInputKeyUp}
                        onChange={this.handleChangeInput}
                    />
                    <Fab
                        color='primary'
                        disabled={this.state.input === ''}
                        onClick={this.sendMessage}
                    >
                        <SendIcon />
                    </Fab>
                </div>
            </div>
        );
    }
}
