import React from 'react';
import Header from '../components/Header.jsx'
import PropTypes from 'prop-types';
import ChatList from '../components/ChatList.jsx'
import MessageField from '../components/MessageField.jsx'
import Profile from '../components/Profile.jsx';

const chats = [
    {
        id: '1',
        text: 'Kate'
    },
    {
        id: '2',
        text: 'John'
    },
    {
        id: '3',
        text: 'James'
    }
];

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.string,
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

    render() {
        const { chatId } = this.props;
        console.log(this.props);
        return (
            <>
                <Header chatId={chatId} />

                {chatId === "profile" ? (
                    <Profile />
                ) : (
                    <div className="content">
                        <ChatList chatId={chatId} chats={chats} />
                        <MessageField chatId={chatId} />
                    </div>
                )}
            </>
        );
    }
}