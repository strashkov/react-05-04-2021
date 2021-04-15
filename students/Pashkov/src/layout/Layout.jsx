import React, { Component } from 'react'
import Header from '../components/Header'
import ChatList from '../components/ChatList'
import MessageField from '../components/MessageFild'

export default class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <Header />
                <div className="contant">
                    <ChatList/>
                    <MessageField />
                </div>
            </div>
        )
    }
}
