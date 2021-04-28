import React from 'react';
import Message from './message';
import PropTypes from 'prop-types';
import '../styles/styles.css';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

export default class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
       messages: PropTypes.object.isRequired,
       chats: PropTypes.object.isRequired,
       sendMessage: PropTypes.func.isRequired,
    };

    state = {
        input: '',
    };

    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

 
    handleSendMessage = (message, sender) => {
        if (this.state.input.length > 0 || sender === 'bot') {
            this.props.sendMessage(message, sender);
        }
        if (sender === 'user') {
            this.setState({ input: '' });
        }
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleKeyUp = (event) => {
        if (event.keyCode === 13) { // Enter
            this.handleSendMessage(this.state.input, 'user');
        }
    };

    render() {
        const { chatId, messages, chats } = this.props;

        const messageElements = chats[chatId].messageList.map(messageId => (
            <Message
                key={messageId}
                text={messages[messageId].text}
                sender={messages[messageId].sender}
            />));

        return [
            <div className="messageFieldWrap">
                <div key='messageElements' className="message-field">
                    {messageElements}
                </div>

                <div ref={this.textInput} style={{ width: '100%', display: 'flex' }}>
                    <TextField
                        name="input"
                        fullWidth={true}
                        hintText="Введите сообщение"
                        style={{ fontSize: '22px' }}
                        onChange={this.handleChange}
                        value={this.state.input}
                        onKeyUp={this.handleKeyUp   }
                    />
                    <FloatingActionButton onClick={ () => this.handleSendMessage(this.state.input, 'user') }>
                        <SendIcon />
                    </FloatingActionButton>
                </div>
            </div>
        ]

    }
}
