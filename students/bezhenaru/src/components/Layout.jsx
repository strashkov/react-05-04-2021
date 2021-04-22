import React from 'react';
import MessageField from './MessageField.jsx';
import Header from './Header.jsx';
import '../styles/style.css';
import ChatList from './ChatList.jsx';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    };
    render() {
        const { chatId } = this.props;

        return (
            <Container className="layout">
                <Header chatId={chatId} />
                <div className="content">
                    <ChatList chatId={chatId} />
                    <MessageField chatId={chatId} />
                </div>
            </Container>
        );
    }
}