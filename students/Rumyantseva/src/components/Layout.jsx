import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx';
import ChartList from './ChatList.jsx'
import MessageField from './MessageField.jsx';

export default class Layout extends React.Component {

    static propTypes = {
        chatId: PropTypes.string,
        chats: PropTypes.object.isRequired,
    };

    state = {
        chats: {
            1: {
                title: 'Чат 1',
                //messageList: [1, 3]
            },
            2: {
                title: 'Чат 2',
                //messageList: [2]
            },
        },
        // messages: {
        //     1: {
        //         author: 'bot',
        //         text: 'Привет!'
        //     },
        //     2: {
        //         author: 'bot',
        //         text: 'Hello!'
        //     },
        //     3: {
        //         author: 'bot',
        //         text: 'Как дела?'
        //     },
        // },
    }



    handleAddChat = (title) => {
        this.setState((state) => {
            const chatId = Object.keys(state.chats).lenght + 1;
            console.log(this.state.chats);
            console.log(chatId);

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
            <>
                <Header chatId={chatId} />
                <div className="messagesBlock">
                    <ChartList
                        chatId={chatId}
                        chats={chats}
                        onAddChat={this.handleAddChat}
                    />
                    {/* <MessageField chatId={chatId} /> */}
                </div>
            </>
        )
    }
}
