import React from 'react';
import Message from './Message';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

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
        userMessage: ''
    };

    sendMessage = () => {
        if (this.state.userMessage) {
            this.setState((state) => ({
                messages: [
                    ...state.messages,
                    {
                        text: state.userMessage,
                        sender: 'user'
                    }
                ],
                userMessage: ''
            }));
        }
    };

    constructor(props) {
        super(props);

        this.messageFieldRef = React.createRef();
    }

    handleClick = () => {
        this.sendMessage()
    };

    handleInput = ({ target: { value } }) => {
        this.setState({
            userMessage: value
        })
    };

    handleKeyUpInput = (event) => {
        if (event.keyCode === 13) {
            this.sendMessage();
        }
    };


    componentDidUpdate(prevProps, prevState) {

        if (prevState.messages[prevState.messages.length - 1].sender === 'bot' && this.state.messages[this.state.messages.length - 1].sender !== 'bot') {
            setTimeout(() =>
                this.setState((state) => ({
                    messages: [
                        ...state.messages,
                        {
                            text: 'Не приставай ко мне, я робот!',
                            sender: 'bot'
                        }

                    ]
                })), 2000);
        }
        this.messageFieldRef.current.scrollTop =
            this.messageFieldRef.current.scrollHeight - this.messageFieldRef.current.clientHeight;
    }


    render() {
        const messageElements = this.state.messages.map(({ text, sender }, index) => (
            <Message key={index} text={text} sender={sender} />));

        return <div className="chat-bord">
            <div className="message-field" ref={this.messageFieldRef}>
                {messageElements}
            </div>
            <div className="actions">
                <TextField
                    autoFocus
                    type="text"
                    value={this.state.userMessage}
                    onChange={this.handleInput}
                    onKeyUp={this.handleKeyUpInput}
                    className="input"
                    label="Multiline"
                    variant="filled"
                    fullWidth
                />
                <Fab
                    color="primary"
                    onClick={this.handleClick}
                    disabled={!this.state.userMessage}
                >
                    <SendIcon />
                </Fab>
            </div>
        </div>
    }
}
