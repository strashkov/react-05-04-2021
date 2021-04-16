import React from 'react';
import Message from './Message.jsx';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Fab from '@material-ui/core/Fab';
import '../styles/style.css';

export default class MessageField extends React.Component {
    state = {
        messages: [
            {
                text: 'Привет!',
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

        this.messageFieldRef = React.createRef();
    }

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].sender !== 'bot') {
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

        this.messageFieldRef.current.scrollTop =
            this.messageFieldRef.current.scrollHeight - this.messageFieldRef.current.clientHeight;
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

    handleChangeInput = ({ target: { value } }) => {
        this.setState({
            input: value /*event.target.value*/
        })
    };

    handleInputKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.sendMessage();
        }
    };

    render() {
        const messageElements = this.state.messages.map(({text, sender}, index) => (
            <Message
                key={index}
                text={text}
                sender={sender}/>)
        );

        return (
            <>
                <div ref={this.messageFieldRef} className="message-field">
                    { messageElements }
                </div>
                <div className='actions'>
                    <TextField
                        placeholder='Введите сообщение'
                        fullWidth
                        value={this.state.input}
                        type="text"
                        autoFocus
                        onKeyUp={this.handleInputKeyUp}
                        onChange={this.handleChangeInput} />
                    <Fab
                        disabled={this.state.input === ''}
                        onClick={this.sendMessage}>
                        <SendIcon />
                    </Fab>
                </div>
            </>
        )
    }
}
