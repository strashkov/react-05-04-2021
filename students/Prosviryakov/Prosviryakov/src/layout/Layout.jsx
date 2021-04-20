import React, { Component } from 'react'
import Header from '../components/Header.jsx'
import ChatList from '../components/ChatList.jsx'
import MessageField from '../components/MessageField.jsx'

export default class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <Header />
                <div className="content">
                    <ChatList />
                    <MessageField />
                </div>
            </div>
        )
    }
}