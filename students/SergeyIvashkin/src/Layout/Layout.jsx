import React from 'react';
import MessageField from '../components/MessageField.jsx';
import Header from '../components/Header.jsx';
import ChatList from '../components/ChatList.jsx';


export default class Layout extends React.Component {


    render() {
        return (
            <>
                <Header />
                <div className="content">
                    <ChatList />
                    <MessageField />
                </div>
            </>
        )
    }

}