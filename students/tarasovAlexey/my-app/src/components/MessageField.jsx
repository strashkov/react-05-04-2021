import React from 'react';
import Message from './Message.jsx';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Fab from '@material-ui/core/Fab';
import './styles/style.css';

export default class MessageField extends React.Component {
    state = {
        messages: [
            {
                text: 'Hi',
                author: 'bot'
            },
            {
                text: 'How is it going?',
                author: 'bot'
            },
        ],
        input: ''
    };

    constructor(props) {
        super(props);

        this.messageFieldRef = React.createRef();
    }

        componentDidUpdate(prevProps, prevState) {
            if (prevState.messages.length < this.state.messages.length &&
                this.state.messages[this.state.messages.length - 1].author !== 'bot') {
                setTimeout(() =>
                    this.setState((state) => ({
                        messages: [
                            ...state.messages,
                            {
                                text: 'Don\'t touch me, i\'m bot!',
                                author: 'bot'
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
                    author: 'me'
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
        const messageElements = this.state.messages.map(({text, author}, index) => (
            <Message
                key={index}
                text={text}
                author={author}/>)
        );

        return (
            <div className="message-field-box">
                <div ref={this.messageFieldRef} className="message-field">
                    { messageElements }
                </div>
                <div className='actions'>
                    <TextField id="outlined-basic" label="add message" variant="outlined"
                        placeholder='add message'
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
            </div>
        )
    }
}