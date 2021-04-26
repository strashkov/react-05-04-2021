import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Header from './Header.jsx';
import MessageField from './MessageField.jsx';
import ChatList from './ChatList.jsx';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sendMessage } from '../actions/messageActions';

class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.string,
        chats: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired
    };

    state = {

        messages: {
            1: {
                sender: 'bot',
                text: 'Привет'
            },
            2: {
                sender: 'bot',
                text: 'Как дела?'
            }
        }
    };
    static defaultProps = {
        chatId: 1
    };

    // handleAddChat = (title) => {
    //     this.setState((state) => {
    //         const chatId = Object.keys(state.chats).length + 1;

    //         return {
    //             chats: {
    //                 ...state.chats,
    //                 [chatId]: {
    //                     title: title,
    //                     messageList: []
    //                 }
    //             },
    //         };
    //     });
    // };

    handleSendMessage = (text, sender = 'me', chatId = this.props.chatId) => {
        const messageId = Object.keys(this.state.messages).length + 1;

        this.setState((state) => {

            return {
                messages: {
                    ...state.messages,
                    [messageId]: {
                        text,
                        sender
                    }
                },
            };
        });

        this.props.sendMessage(messageId, chatId);

        if (sender !== 'bot') {
            setTimeout(() => {
                this.handleSendMessage('Я робот', 'bot', chatId)
            }, 1000);
        }

    };

    render() {
        const { chatId, chats } = this.props;
        const { messages } = this.state;

        const activeMessages = (chatId == undefined) ? [{ sender: 'bot', text: 'Чат не выбран' }] : chats[chatId].messageList.map((messageId) => {
            return messages[messageId];
        });

        // const activeMessages = chats[chatId].messageList.map((messageId) => {
        //     return messages[messageId];
        // });

        return (
            <Container className='layout'>
                <Header chatId={chatId} />
                <div className='content'>
                    <ChatList
                        chatId={chatId}
                    />
                    <MessageField
                        messages={activeMessages}
                        onSendMessage={this.handleSendMessage} />
                </div>
            </Container>
        );
    }
}

const mapStateToProps = (store) => { /*Получаем State и передаем его в пропсы*/
    return {
        chats: store.chatReducer.chats,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(
    { sendMessage },
    dispatch); //Передаем экшен , который хотим вызвать


export default connect(mapStateToProps, mapDispatchToProps)(Layout);
