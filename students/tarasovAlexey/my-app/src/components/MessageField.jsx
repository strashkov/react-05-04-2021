import React from 'react';
import Message from './Message.jsx';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Fab from '@material-ui/core/Fab';
import './styles/style.css';
import PropTypes from 'prop-types';

export default class MessageField extends React.Component {
    static propTypes = {
        messages: PropTypes.arrayOf(PropTypes.shape({
            sender: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })),
        onAddMessage: PropTypes.func.isRequired,
    };

    state = {
        input: ''
    };

    constructor(props) {
        super(props);

        this.messageFieldRef = React.createRef();
    }

    componentDidUpdate() {
        this.messageFieldRef.current.scrollTop =
            this.messageFieldRef.current.scrollHeight - this.messageFieldRef.current.clientHeight;
    }
    addMessage = () => {
        this.props.onAddMessage(this.state.input)
        this.setState({
            input: ''
        });
    };

    handleChangeInput = ({ target: { value } }) => {
        this.setState({
            input: value /*event.target.value*/
        })
    };

    handleInputKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.addMessage();
        }
    };

    render() {
        // if (!chatId) {
        //     return <div className='empty-chat'>Выберите чат</div>;
        // }
        const messageElements = this.props.messages.map(({text, sender}, index) => (
            <Message
                key={index}
                text={text}
                sender={sender}/>)
        );

        return (
            <div className="message-field-wrapper">
                <div ref={this.messageFieldRef} className="message-field">
                    { messageElements }
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
                        onClick={this.addMessage}>
                        <SendIcon />
                    </Fab>
                </div>
            </div>
        )
    }
}