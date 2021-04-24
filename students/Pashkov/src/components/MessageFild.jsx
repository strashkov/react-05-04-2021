import React from 'react';
import Message from './Message';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';

export default class MessageField extends React.Component {

    static propTypes = {
        chatId: PropTypes.string,
        chats: PropTypes.array
    }

    state = {
        messages: {
            '1': [
                {
                    text: 'Привет',
                    sender: 'bot'
                },
                {
                    text: 'Как дела?',
                    sender: 'bot'
                },
            ],
            '2': [
                {
                    text: 'Чат 2',
                    sender: 'bot'
                },
            ],
            '3': [
                {
                    text: 'Чат 3',
                    sender: 'bot'
                },
            ],
            '4': [
                {
                    text: 'Чат 4',
                    sender: 'bot'
                },
            ],
            '5': [
                {
                    text: 'Чат 5',
                    sender: 'bot'
                },
            ],
        },
        userMessage: ''
    };

    constructor(props) {
        super(props);

        this.messageFieldRef = React.createRef();
    }

    sendMessage = () => {
        const { chatId, chats } = this.props;
        if (this.state.userMessage) {
            this.setState((state) => ({
                messages: {
                    ...state.messages,
                    [chatId]: [
                        ...state.messages[chatId],
                        {
                            text: state.userMessage,
                            sender: 'user'
                        }
                    ]
                },
                userMessage: ''
            }));
        }
    };

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
        const { chatId } = this.props;

        if (!chatId) {
            return null
        }

        if (prevState.messages[chatId].length < this.state.messages[chatId].length &&
            this.state.messages[chatId][this.state.messages[chatId].length - 1].sender !== 'bot') {
            setTimeout(() =>
                this.setState((state) => ({
                    messages: {
                        ...state.messages,
                        [chatId]: [
                            ...state.messages[chatId],
                            {
                                text: 'Не приставай ко мне, я робот!',
                                sender: 'bot'
                            }
                        ]
                    }
                })), 1000);
        }
        const scrolField = this.messageFieldRef.current;
        scrolField.scrollTop = scrolField.scrollHeight - scrolField.clientHeight;
    }


    render() {
        const { chatId } = this.props;
        if (!chatId) {
            return <div className="empty-chat"><Typography variant="h6">Выберите чат</Typography></div>
        }
        const messageElements = this.state.messages[chatId].map(({ text, sender }, index) => (
            <Message key={index} text={text} sender={sender} />
        ));


        return (
            <div className="chat-bord">
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
        )
    }
}
