import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './Header.jsx'
import ChatList from './ChatList.jsx'
import MessageField from './MessageFild.jsx'
import Profile from './Profile.jsx'

export default class Layout extends Component {
    static propTypes = {
        chatId: PropTypes.string,
    }

    state = {
        chats: [
            {
                id: '1',
                text: 'Chat 1',
                messages: [
                    {
                        text: 'Hi',
                        sender: 'bot'
                    },
                    {
                        text: 'How are you?',
                        sender: 'bot'
                    },
                ],
            },
            {
                id: '2',
                text: 'Chat 2',
                messages: [
                    {
                        text: 'Chat 2',
                        sender: 'bot'
                    },
                ]

            },
            {
                id: '3',
                text: 'Chat 3',
                messages: [
                    {
                        text: 'Chat 3',
                        sender: 'bot'
                    },
                ]
            },
            {
                id: '4',
                text: 'Chat 4',
                messages: [
                    {
                        text: 'Chat 4',
                        sender: 'bot'
                    },
                ]
            },
            {
                id: '5',
                text: 'Chat 5',
                messages: [
                    {
                        text: 'Chat 5',
                        sender: 'bot'
                    },
                ]
            },

        ],
    }

    render() {


        const { chatId } = this.props;
        return (
            <div className="layout">
                <Header chatId={chatId} />
                {chatId === 'profile' ?
                    <Profile chatId={chatId} />
                    :
                    <div className="contant">
                        <ChatList chatId={chatId} chats={this.state.chats} />
                        <MessageField chatId={chatId} chats={this.state.chats} />
                    </div>
                }

            </div>
        )
    }
}
