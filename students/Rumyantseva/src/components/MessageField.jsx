import React from 'react';
import Message from './Message.jsx';
import PropTypes from 'prop-types';
import "../style/style.css";
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default class MessageField extends React.Component {
    static propTypes = {
        // chatId: PropTypes.string,
        messages: PropTypes.arrayOf(PropTypes.shape({
            author: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })),
    };

    state = {
        input: '',
    };

    constructor(props) {
        super(props);
        this.messageFieldRef = React.createRef();
    }

    componentDidUpdate() {
        // const { chatId } = this.props;

        // if (prevState.messages[chatId].length !== this.state.messages[chatId].length &&
        //     this.state.messages[chatId][this.state.messages[chatId].length - 1].author !== `bot from chat ${chatId}`) {

        //     setTimeout(() =>
        //         this.setState((state) => ({
        //             messages: {
        //                 ...state.messages,
        //                 [chatId]: [
        //                     ...state.messages[chatId],
        //                     {
        //                         author: `bot from chat ${chatId}`,
        //                         text: 'Не приставай ко мне!'
        //                     }
        //                 ]
        //             }
        //         })), 1000);
        // }
        this.messageFieldRef.current.scrollTop =
            this.messageFieldRef.current.scrollHeight - this.messageFieldRef.current.clientHeight;
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

        const messageElements = this.props.messages.map(({ text, author }, index) => (
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