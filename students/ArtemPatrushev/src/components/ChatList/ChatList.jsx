import React from 'react';
import s from './ChatList.module.css';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';


export default class ChatList extends React.Component {
    static propTypes = {
        chatId: PropTypes.string,
        chats: PropTypes.objectOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            unread: PropTypes.bool,
        })).isRequired,
        addChat: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired,
        markChatRead: PropTypes.func.isRequired
    };

    state = {
        newChatName: ''
    };

    componentDidUpdate(prevProps) {
        if (prevProps.chatId !== this.props.chatId) {
            this.props.markChatRead(this.props.chatId);
        }
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
    };

    handleNavigate = (link) => {
       this.props.push(link);
    };

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
                    
                   
                        // <ListItem button selected={id === this.props.chatId} onClick={() => this.handleNavigate(`/chat/${id}`)} key={id}>
                        //     <ListItemText primary={value.title} />
                        // </ListItem>

                        <ListItem
                            key={id}
                            button
                            selected={id === this.props.chatId}
                            onClick={() => { this.handleNavigate(`/chat/${id}`) }}>
                            <ListItemText primary={value.title}/>
                            {value.unread && <div className={s.unreadChat}></div>}     
                        </ListItem>
                    // {value.unread && <div className={s.unreadChat}></div>}  --- если value unread, то дорисовывается div
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
