import React from 'react';
import Header from './Header.jsx';
import ChartList from './ChatList.jsx'
import MessageField from './MessageField.jsx';

export default class Layout extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="messagesBlock">
                    <ChartList />
                    <MessageField />
                </div>


            </>

        )
    }
}