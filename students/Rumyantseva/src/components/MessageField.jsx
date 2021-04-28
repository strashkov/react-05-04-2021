import React from 'react';
import Message from './Message.jsx';
import PropTypes from 'prop-types';
import "../style/style.css";
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    };

    state = {
        messages: {
            '1': [
                { author: 'bot from chat 1', text: 'Привет!' },
                { author: 'bot from chat 1', text: 'Как дела?' },
            ],
            '2': [
                { author: 'bot from chat 2', text: 'Hello!' },
                { author: 'bot from chat 2', text: 'How are you?' },
            ],
            '3': [
                { author: 'bot from  chat 3', text: 'Bonjour!' },
                { author: 'bot from  chat 3', text: 'Comment vas-tu?' },
            ],
            '4': [
                { author: 'bot from  chat 4', text: 'Guten Tag!' },
                { author: 'bot from  chat 4', text: 'Wie geht es Ihnen?' },
            ],
        },
        input: '',
    };

    constructor(props) {
        super(props);
        this.messageFieldRef = React.createRef();
    }

    componentDidUpdate(prevProps, prevState) {
        const { chatId } = this.props;

        if (prevState.messages[chatId].length !== this.state.messages[chatId].length &&
            this.state.messages[chatId][this.state.messages[chatId].length - 1].author !== `bot from chat ${chatId}`) {

            setTimeout(() =>
                this.setState((state) => ({
                    messages: {
                        ...state.messages,
                        [chatId]: [
                            ...state.messages[chatId],
                            {
                                author: `bot from chat ${chatId}`,
                                text: 'Не приставай ко мне!'
                            }
                        ]
                    }
                })), 1000);
        }
        this.messageFieldRef.current.scrollTop = this.messageFieldRef.current.scrollHeight - this.messageFieldRef.current.clientHeight;
    }

    sendMessage = () => {
        const { chatId } = this.props;
        this.setState((state) => ({
            messages: {
                ...state.messages,
                [chatId]: [
                    ...state.messages[chatId],
                    {
                        author: 'me',
                        text: state.input
                    }
                ]
            },
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
        const { chatId } = this.props;

        if (!this.props.chatId) {
            return (
                <div className="emptyChat">Выберите чат</div>
            )
        }

        const messageElements = this.state.messages[chatId].map(({ text, author }, index) => (
            <Message key={index} text={text} author={author} />)
        );
        //console.log(this.state);


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