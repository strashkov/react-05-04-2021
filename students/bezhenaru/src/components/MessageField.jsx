import React from 'react';
import Message from './Message.jsx';
import '../styles/style.css';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon  from '@material-ui/icons/Send';
import PropTypes from 'prop-types';

export default class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    };
    state = {
        messages: {        
            '1': [
            {
                author: 'Robocop', 
                text: "Привет!"
            },
            {
                author: 'Robocop', 
                text: "Как дела?" 
            },
            ],
            '2': [
                {
                    author: 'Robocop', 
                    text: "Чат № 2"
                },
                ],
                '3': [
                    {
                        author: 'Robocop', 
                        text: "Чат № 3!"
                    },                
                ],
            },
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
        const chatId = this.props.chatId;

        this.setState((state) => ({
            messages: {
                ...state.messages,
                [chatId]: [
                    ...state.messages[chatId],
                    {
                        text: state.input,
                        sender: 'me'
                    }
                ]
            },
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
        const { chatId } = this.props;

        if (!chatId) {
            return <div className='empty-chat'>Выберите чат</div>;
        }
        const messageElements = this.state.messages.map(({author, text}, index) => (
            <Message key={ index } text={text} author={author} />)
        );

        return (
            <div className="message-field-wrapper">
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
                        color='primary'            
                        disabled={this.state.input === ''}
                        onClick={this.sendMessage}>
                        <SendIcon />
                    </Fab>
                </div> 
            </div>
        )        
    }
}
 