import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './Header.jsx';
import MessageField from './MessageField.jsx';
import ChatList from './ChatList.jsx';

export default class Layout extends React.Component {
    render() {
        return (
            <Container className="layout">
                <Header />
                <div className="content">
                    <ChatList />
                    <MessageField />
                </div>
            </Container>
        );
    }
}
