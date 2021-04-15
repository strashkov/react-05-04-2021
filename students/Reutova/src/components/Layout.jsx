import React from 'react';
import PropTypes from 'prop-types';

import ChatList from './ChatList.jsx';
import Header from './Header.jsx';
import MessageField from './MessageField.jsx';

export default class Layout extends React.Component {
    render() {
        return (
            <div className="layout-main">
                <Header/>
                <div className="chatarea">                    
                    <ChatList/>
                    <MessageField/>
                </div>
            </div>
        )
    }
}

//<ChatList/>