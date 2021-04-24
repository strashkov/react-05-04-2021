import React from 'react';
import MessageField from './messageField';
import Header from './header';
import ChatList from './chatList';
import PropTypes from 'prop-types';
import Profile from './profile';

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        profile: PropTypes.bool,
    };

    static defaultProps = {
        chatId: 1,
        profile: false,
    };

    state = {
        chats: {
            1: { title: 'Чат 1', messageList: [1] },
            2: { title: 'Чат 2', messageList: [2] },
            3: { title: 'Чат 3', messageList: [1] },
        },
        messages: {
            1: { text: "Привет!", sender: 'bot' },
            2: { text: "Здравствуйте!", sender: 'bot' },
        }
    };

    componentDidUpdate(prevProps, prevState) {
        const { messages } = this.state;
        if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
            Object.values(messages)[Object.values(messages).length - 1].sender === 'user') {
            setTimeout(() =>
                this.sendMessage('Не приставай ко мне, я робот!', 'bot'), 1000);
        }
    }

    sendMessage = (message, sender) => {
        const { messages, chats } = this.state;
        const { chatId } = this.props;

        const messageId = Object.keys(messages).length + 1;
        this.setState({
            messages: {
                ...messages,
                [messageId]: { text: message, sender: sender }
            },
            chats: {
                ...chats,
                [chatId]: {
                    ...chats[chatId],
                    messageList: [...chats[chatId]['messageList'], messageId]
                }
            },
        })
    };

    render() {
        console.log(`profile ${this.props.profile}`)
        let payload;
        if (this.props.profile == true) {
            payload =
                <div className="chatWrap">
                    <Profile />
                </div>

        } else {
            payload =
                <div className="chatWrap">
                    <ChatList chats={this.state.chats} />
                    <MessageField chatId={this.props.chatId}
                        chats={this.state.chats}
                        messages={this.state.messages}
                        sendMessage={this.sendMessage} />
                </div>
        }
        return (
            <div className="layout">
                <Header chatId={this.props.chatId} />
                {payload}
            </div>
        )
    }
}