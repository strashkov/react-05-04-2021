import React from 'react';
import { Link } from 'react-router-dom';
import s from './ChatList.module.css';
import PropTypes from 'prop-types';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';


export default class ChatList extends React.Component {
    static propTypes = {
        chatId: PropTypes.string,
        chats: PropTypes.object.isRequired,      // isRequired значит обязательный пропс, без которого работать не будет
        addChat: PropTypes.func.isRequired
    };

    state = {
        newChatName: ''
    }

    handleEnterChatName = (event) => {
        console.log(event.target.value);
        this.setState({
            newChatName: event.target.value
        });
    };
    
    handleClickAddNewChat = () => {
        this.props.addChat(this.state.newChatName);
        
        this.setState({
            newChatName: ''
        });
    }

    render() {
        const { chats } = this.props;

        return (
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" className={s.yourChatsHeader}>
                        Your Chats
                    </ListSubheader>
                }
                className={s.root}
                > 
                {Object.entries(chats).map(([ id, value ]) => (
                    // key всегда на верхнем элементе рендера
                    // to={`/chat/${id}`} --- позволяет перейти по указанной ссылке
                    // selected={id === this.props.chatId} --- фиксируется выбранный чат - выделение цветом
                    
                    <Link key={id} to={`/chat/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem button selected={id === this.props.chatId}>
                            <ListItemText primary={value.title} />
                        </ListItem>
                    </Link>
                ))}
                <ListItem button>
                    <TextField
                        value={this.state.newChatName}
                        placeholder='Enter the name of the chat'
                        onChange={this.handleEnterChatName} />
                    <SendIcon 
                        disabled={!this.state.newChatName}
                        onClick={this.handleClickAddNewChat}/>
                </ListItem>
            </List>
        );
    };
};

//Object.entries(chats) - разложит объект на массив элементов. В данном случае первый элемент в массиве - ключ(цифра), второй - title (получится массив массивов)
