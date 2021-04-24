import React from 'react';
import Message from './Message.jsx';
import '../styles/style.css';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon  from '@material-ui/icons/Send';

export default class MessageField extends React.Component {
    state = {
        messages: [
            {
                author: 'Robocop', 
                text: "Привет!"
            },
            {
                author: 'Robocop', 
                text: "Как дела?" 
            },
         ],
         input: ''
    };

    constructor(props) {
        super(props);
        this.messageFieldRef = React.createRef();
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            prevState.messages.length < this.state.messages.length &&
            this.state.messages[this.state.messages.length - 1].author !== 'Robocop') {
            setTimeout(() =>
                this.setState((state) => ({
                    messages: [
                        ...state.messages,  
                       {
                        text: 'не приставай, я робот',
                        author: 'Robocop'
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
        const messageElements = this.state.messages.map(({author, text}, index) => (
            <Message key={ index } text={text} author={author} />)
        );

        return (
            <div>
                <div ref={this.messageFieldRef} className="message-field">
                    { messageElements }
                </div>
                <div className='actions'>
                    <TextField
                        className='textField'
                        placeholder='Your message'
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
 