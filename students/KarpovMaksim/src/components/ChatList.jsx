import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default class ChatList extends React.Component {
  chatTheme = ['Chat_1_about_other_them',' Chat_2',' Chat_3_test']
  render() {
    return <List >
    {(this.chatTheme.map((theme,index) => (
      <ListItem key={index}>
        {theme}
      </ListItem>
      )))
    }
  </List>
    
  }
}