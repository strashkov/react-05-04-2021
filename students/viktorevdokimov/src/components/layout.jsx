import React from 'react';
import MessageField from './messageField';
import Header from './header';
import ChatList from './chatList';

export default class Layout extends React.Component {
    render() {
        return <div className="layout">
                <Header chatName="test" />
                <div className="chatWrap">
                    <ChatList/>
                    <MessageField/>
                </div>
            </div>
    }
}