import React from 'react';
import Message from './Message.jsx';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import '../style/style.css';
import PropTypes from 'prop-types';

export default class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.string,
        messages: PropTypes.array,
    };

    state = {
        messages: {
            '1': [
                {
                    text: 'Привет!',
                    sender: 'bot'
                },
                {
                    text: 'Как дела?',
                    sender: 'bot'
                },
            ],
            '2': [
                {
                    text: 'Это чат 2!',
                    sender: 'bot'
                }
            ],
            '3': [
                {
                    text: 'Это чат 3!',
                    sender: 'bot'
                }
            ]
        },
        input: ''
    };

    constructor(props) {
        super(props);

        this.messageFieldRef = React.createRef();
    }

    componentDidUpdate(prevProps, prevState) {
        const { chatId } = this.props;

        if (
            prevState.messages[chatId].length < this.state.messages[chatId].length &&
            this.state.messages[chatId][this.state.messages[chatId].length - 1].sender !== 'bot'
        ) {
            setTimeout(() =>
                this.setState((state) => ({
                    messages: {
                        ...state.messages,
                        [chatId]: [
                            ...state.messages[chatId],
                            {
                                text: `Не приставай ко мне, я робот из чата ${chatId}!`,
                                sender: 'bot'
                            }
                        ]
                    }
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
            input: value
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

        const messageElements = this.state.messages[chatId].map(({ text, sender }, index) => (
            <Message
                key={index}
                text={text}
                sender={sender} />)
        );

        return (
            <div className="chat-board">
                <div ref={this.messageFieldRef} className="message-field">
                    {messageElements}
                </div>
                <div className='actions'>
                    <TextField
                        style={{ marginRight: '12px' }}
                        placeholder='Введите сообщение'
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