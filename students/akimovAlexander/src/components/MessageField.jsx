import React from 'react';
import Message from './Message.jsx';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import '../styles/style.css';

export default class MessageField extends React.Component {
    state = {
        messages: [
            {
                text: 'Привет',
                sender: 'bot'
            },
            {
                text: 'Как дела?',
                sender: 'bot'
            },
        ],
        input: ''
    };

    constructor(props) {
        super(props);
        this.MessageFieldRef = React.createRef();
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            prevState.messages.length < this.state.messages.length &&
            this.state.messages[this.state.messages.length - 1].sender !== 'bot'
        ) {
            setTimeout(() =>
                this.setState((state) => ({
                    messages: [
                        ...state.messages,
                        {
                            text: 'Не приставай ко мне, я робот!',
                            sender: 'bot'
                        }
                    ]
                })), 1000);
        }
        this.MessageFieldRef.current.scrollTop = this.MessageFieldRef.current.scrollHeight - this.MessageFieldRef.current.clientHeight;
    }

    sendMessage = () => {
        this.setState((state) => ({
            messages: [
                ...state.messages,
                {
                    text: state.input,
                    sender: 'me'
                }
            ],
            input: ''
        }));
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
        const messageElements = this.state.messages.map(({ text, sender }, index) => (
            <Message key={index} text={text} sender={sender} />)
        );

        return (
            <div className="message-field-wrapper">
                <div ref={this.MessageFieldRef} className="message-field">
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