import React from 'react';
import MessageField from "./components/MessageField";
import Header from "./components/Header";
import ChatList from "./components/ChatList";
import './components/styles/style.css';
import RightList from "./components/RightList";

const Layout = () => {
    return (
        <div className='container'>
            <Header/>
            <ChatList/>
            <MessageField/>
            <RightList/>
        </div>
    )
}

export default Layout