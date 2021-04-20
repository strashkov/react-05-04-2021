import React from 'react';
import Header from './Header.jsx';
import ChatList from './ChatList.jsx';
import MessageField from './MessageField.jsx';
import '../styles/style.css';


export default class Layout extends React.Component {
    render() {
        return (
            <div className="layout">
                <Header />
                <div className='main'>
                    <div className="main-left">
                        <ChatList />
                    </div>
                    <div className="main-right">
                        <MessageField />
                    </div>
                </div>
            </div>
        )
    }
}