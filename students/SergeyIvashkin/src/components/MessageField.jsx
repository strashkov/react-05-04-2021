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
                author: 'me',
                message: "Привет!"
            },
            {
                author: 'me',
                message: "Как дела?"
            },
        ],
        input: ''
    };

    constructor(props) {
        super(props);

        this.messageFieldRef = React.createRef();
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.messages.length !== this.state.messages.length && this.state.messages[this.state.messages.length - 1].author !== 'robot') {
            setTimeout(() =>
                this.setState((state) => ({
                    messages: [
                        ...state.messages,
                        {
                            author: 'robot',
                            message: 'Не приставай ко мне, я робот!'
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
                    message: state.input,
                    author: 'me'
                }
            ],
            input: ''
        }))
    }


    handleClick = () => {
        this.setState((state) => ({
            messages: [
                ...state.messages,
                {
                    message: state.input,
                    author: 'me'
                }
            ],
            input: ''
        }));
    };

    handleInputKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.sendMessage();
        }

    }

    handleChangeInput = ({ target: { value } }) => {
        this.setState({
            input: /*event.target.value*/value
        })
    }

    render() {

        const messageElements = this.state.messages.map(({ message, author }, index) => (
            <Message key={index} author={author} text={message} />)
        );

        return (<div className="chat">
            <div ref={this.messageFieldRef} className="message-field">
                {messageElements}
            </div>
            <div className='actions'>
                <TextField
                    placeholder='Введите сообщение'
                    fullWidth
                    value={this.state.input}
                    autoFocus
                    type="text"
                    onKeyUp={this.handleInputKeyUp}
                    onChange={this.handleChangeInput} />
                <Fab disabled={!this.state.input} onClick={this.handleClick}><SendIcon /></Fab>
            </div>

        </div>
        )
    }
}