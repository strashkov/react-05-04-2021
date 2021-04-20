import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import FaceIcon from "@material-ui/icons/Face";

export default class ChatList extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    };
  render() {
    return (
      <List>
        {listOfChats.map(({ id, text }) => (
          <Link key={id} to={`/chat/${id}`}>
            <ListItem button selected={ id === this.props.chatId }>
              <ListItemIcon>
                { id % 2 ? <FaceIcon /> : <InsertEmoticonIcon /> }
              </ListItemIcon>
              <ListItemText primary={text} />
              </ListItem>
          </Link>
        ))}
      </List>
    );
  }
}
