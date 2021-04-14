import React from 'react';
import Message from './Message.jsx';
import "../style/style.css";
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default class MessageField extends React.Component {
    state = {
        messages: [
            { author: 'bot', text: 'Привет!' },
            { author: 'bot', text: 'Как дела?' },
        ],
        input: '',
    };

    constructor(props) {
        super(props);
        this.messageFieldRef = React.createRef();
    }

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].author !== 'bot') {
            setTimeout(() =>
                this.setState((state) => ({
                    messages: [
                        ...state.messages, {
                            author: 'bot',
                            text: 'Не приставай ко мне, я робот!'
                        }
                    ]
                })), 1000);
        }
        this.messageFieldRef.current.scrollTop = this.messageFieldRef.current.scrollHeight - this.messageFieldRef.current.clientHeight;
    }

    sendMessage = () => {
        this.setState((state) => ({
            messages: [
                ...state.messages, {
                    author: 'me',
                    text: state.input
                }
            ],
            input: '',
        }));
    };

    handleClick = () => {
        this.sendMessage();
    };

    handleInputKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.sendMessage();
        }
    };

    handleChangeInput = (event) => {
        this.setState({
            input: event.target.value
        })
    };

    render() {
        const messageElements = this.state.messages.map(({ text, author }, index) => (
            <Message key={index} text={text} author={author} />)
        );
        console.log(this.state.messages);


        return (
            <div className="layout">
                <div ref={this.messageFieldRef} className="message-field">
                    {messageElements}
                </div>
                <div className='actions'>
                    <TextField
                        autoFocus
                        fullWidth
                        placeholder="Введите сообщение"
                        value={this.state.input}
                        onKeyUp={this.handleInputKeyUp}
                        type="text"
                        onChange={this.handleChangeInput} />
                    <Fab
                        disabled={!this.state.input}
                        onClick={this.handleClick}>
                        <AddIcon />
                    </Fab>
                </div>
            </div>
        )
    }
}