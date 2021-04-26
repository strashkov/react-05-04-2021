import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import '../styles/style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addChat } from '../actions/chatActions';



class ChatList extends React.Component {
    static propTypes = {
        chatId: PropTypes.string,
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired
    };

    state = {
        chatName: ''
    };

    handleChatNameChange = (event) => {
        this.setState({
            chatName: event.target.value
        });
    };

    handleAddChatClick = () => {
        this.props.addChat(this.state.chatName);
        this.setState({
            chatName: ''
        });
    };

    render() {
        const { chatName } = this.state;
        const { chats } = this.props;
        return (
            <div className="chat-list">
                <List>
                    {Object.entries(chats).map(([id, value]) => (
                        <Link to={`/chat/${id}`} key={id}>
                            <ListItem button selected={id === this.props.chatId}>
                                <div className="chat-list-icon" />
                                <ListItemText primary={value.title} />
                            </ListItem>
                        </Link>
                    ))}
                    <ListItem button >
                        <TextField
                            value={chatName}
                            onChange={this.handleChatNameChange} />
                        <IconButton
                            disabled={!chatName}
                            onClick={this.handleAddChatClick}>
                            <SendIcon />
                        </IconButton>
                    </ListItem>
                </List>
            </div>
        );
    }
}

// const mapStateToProps = ({ chatReducer }) => ({
//     chats: chatReducer.chats,
// });

const mapStateToProps = (store) => { /*Получаем State и передаем его в пропсы*/
    return {
        chats: store.chatReducer.chats,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(
    { addChat },
    dispatch); //Передаем экшен , который хотим вызвать

// const mapDispatchToProps = dispatch => () => {
//     return {
//         onAddChat: (title) => {
//             const action = addChat(title);
//             dispatch(action);
//         }
//     };
// };

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);