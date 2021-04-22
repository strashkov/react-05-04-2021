import React from 'react';
import Message from './Message.jsx';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Fab from '@material-ui/core/Fab';
import '../styles/style.css';
import PropTypes from 'prop-types';

export default class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.string,
        messages: PropTypes.arrayOf(PropTypes.shape({
            author: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }))
    };

    state = {
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
            this.state.messages[chatId][this.state.messages[chatId].length - 1].author !== 'Robot') {
            setTimeout(() =>
                this.setState((state) => ({
                    messages: {
                        ...state.messages,
                        [chatId]:
                            [
                                ...state.messages[chatId],
                                {
                                    author: 'Robot',
                                    text: `Не приставай ко мне, я робот из чата ${chatId}!`,
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
                [chatId]: [
                    ...state.messages[chatId],
                    {
                        author: 'User',
                        text: state.input
                    }]
            },
            input: ''
        }));
    };
    handleChangeInput = ({ target: { value } }) => {
        this.setState({
            input: value
        })
    };
    handleButtonKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.sendMessage();
        }
    };
    render() {

        const { chatId } = this.props;
        const messageElements = this.state.messages[chatId].map(({ text, author }, index) => (
            <Message
                key={index}
                text={text}
                author={author} />)
        );

        if (!chatId) {
            return <div className='empty-chat'>Выберите чат</div>;
        }

        return (
            <div className="message-field-wrapper">
                <div ref={this.messageFieldRef} className="message-field">
                    {messageElements}
                </div>
                <div className='actions'>
                    <TextField
                        style={{ marginRight: '12px' }}
                        placeholder='Введите сообщение'
                        fullWidth
                        autoFocus
                        value={this.state.input}
                        onChange={this.handleChangeInput}
                        onKeyUp={this.handleButtonKeyUp}
                        type='text' />
                    <Fab
                        color='primary'
                        onClick={this.sendMessage}
                        disabled={this.state.input === ''}>
                        <SendIcon />
                    </Fab>
                </div>
            </div>
        )
    }
}
