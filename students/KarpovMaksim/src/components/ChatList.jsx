import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';



export default class ChatList extends React.Component {
  static propTypes = {
    chatId: PropTypes.string,
    them: PropTypes.string
  };
  state = {
    chatThemes: [
    {
      id: '1',
      chat: 'Chat_1',
      them: 'other_them'
    },
    {
      id: '2',
      chat: 'Chat_2',
      them: 'природе'
    },
    {
      id: '3',
      chat: 'Chat_3',
      them:'рыбалке'
    }
  ]}
  
  render() {
    return (
      <div className="chat-list-field">
        <List>
        {this.state.chatThemes.map(({id, them, chat}) => (
          <Link key={id} to={`/chat/${id}/${them}`}>
            <ListItem button selected={id === this.props.chatId}>
              <div className='chat-list-icon'></div>
              <ListItemText primary={chat}/>
            </ListItem>
          </Link>
          ))}
        </List>
     
      </div>
    )
  }
}