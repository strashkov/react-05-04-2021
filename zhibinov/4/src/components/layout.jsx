import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Header from './Header.jsx';
import MessageField from './MessageField.jsx';
import ChatList from './ChatList.jsx';

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    };

    state = {
        chats: {
            1: {
                title: 'Чат 1',
                messageList: [1, 2]
            },
            2: {
                title: 'Чат 2',
                messageList: [3, 4]
            }
        },
        messages: {
            1: {
                text: 'Привет!',
                author: 'Robot'
            },
            2: {
                text: 'Как дела?',
                author: 'Robot'

            },

            3: {
                text: 'Жопа!',
                author: 'Robot'

            },

            4: {
                text: 'Я устал!',
                author: 'Robot'

            }
        },
    };

    handleAddChat = (title) => {
        this.setState((state) => {
            const chatId = Object.keys(state.chats).length + 1;
            return {
                chats: {
                    ...state.chats,
                    [chatId]: {
                        title: title
                    }
                },
            };
        });
    };

    render() {
        const { chatId } = this.props;
        const { chats } = this.state;

        return (
            <Container className="layout">
                <Header chatId={chatId} />
                <div className="content">
                    <ChatList chatId={chatId} />
                    <MessageField
                        chatId={chatId}
                        chats={chats}
                        onAddChat={this.handleAddChat} />
                </div>
            </Container>
        );
    }
}