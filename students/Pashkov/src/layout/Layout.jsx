import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import ChatList from '../components/ChatList'
import MessageField from '../components/MessageFild'
import Profile from '../components/Profile'

export default class Layout extends Component {
    static propTypes = {
        chatId: PropTypes.string,
    }

    state = {
        chats: [
            {
                id: '1',
                text: 'Чат 1',
                messages: [
                    {
                        text: 'Привет',
                        sender: 'bot'
                    },
                    {
                        text: 'Как дела?',
                        sender: 'bot'
                    },
                ],
            },
            {
                id: '2',
                text: 'Чат 2',
                messages: [
                    {
                        text: 'Чат 2',
                        sender: 'bot'
                    },
                ]

            },
            {
                id: '3',
                text: 'Чат 3',
                messages: [
                    {
                        text: 'Чат 3',
                        sender: 'bot'
                    },
                ]
            },
            {
                id: '4',
                text: 'Чат 4',
                messages: [
                    {
                        text: 'Чат 4',
                        sender: 'bot'
                    },
                ]
            },
            {
                id: '5',
                text: 'Чат 5',
                messages: [
                    {
                        text: 'Чат 5',
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
