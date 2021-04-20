import React from 'react';
import propsTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Header from './Header.jsx';
import MessageField from './MessageField.jsx';
import ChatList from './ChatList.jsx';
import { render } from 'react-dom';

export default class Layout extends React.Component {
    render() {
        return (
            <Container className='layout'>
                <Header />
                <div className='content'>
                    <ChatList />
                    <MessageField />
                </div>
            </Container>
        );
    }
}
