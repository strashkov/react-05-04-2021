import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Header from './Header.jsx';
import MessageField from './MessageField.jsx';
import ChatList from './ChatList.jsx';

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.string,
        chats: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired
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
