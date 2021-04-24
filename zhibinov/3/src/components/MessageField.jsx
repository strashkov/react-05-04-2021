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
                author: 'Robot',
                text: 'Привет!'
            },
            {
                author: 'Robot',
                text: 'Как дела?'
            },],
        input: ''
    };
    constructor(props) {
        super(props);
        this.messageFieldRef = React.createRef();
    };
    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].author !== 'Robot') {
            setTimeout(() =>
                this.setState((state) => ({
                    messages: [
                        ...state.messages,
                        {
                            author: 'Robot',
                            text: 'Не приставай ко мне!'
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
                    author: 'User',
                    text: state.input
                }],
            input: ''
        }));
    };
    handleClick = () => {
        this.sendMessage();
    };
    handleChangeInput = (event) => {
        this.setState({
            input: event.target.value
        })
    };
    handleButtonKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.sendMessage();
        }
    };
    render() {
        const messageElements = this.state.messages.map(({ text, author }, index) => (
            <Message
                key={index}
                text={text}
                author={author} />)
        );

        return (
            <div className="message-field-wrapper">
                <div ref={this.messageFieldRef} className="message-field">
                    {messageElements}
                </div>
                <div className='actions'>
                    <TextField
                        placeholder='Введите сообщение'
                        fullWidth
                        autoFocus
                        value={this.state.input}
                        onChange={this.handleChangeInput}
                        onKeyUp={this.handleButtonKeyUp}
                        type='text' />
                    <Fab onClick={this.handleClick} disabled={!this.state.input}>
                        <SendIcon></SendIcon>
                    </Fab>
                </div>
            </div >
        )
    }
}
