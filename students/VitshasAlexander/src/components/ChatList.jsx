import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import FaceIcon from "@material-ui/icons/Face";

export default class ChatList extends React.Component {
  render() {
    return (
      <List>
        {[
          "Страна багровых туч",
          "Полдень, XXII век",
          "Попытка к бегству",
          "Трудно быть богом",
          "Понедельник начинается в субботу",
          "Хищные вещи века",
          "Улитка на склоне",
          "Второе нашествие марсиан",
          "Сказка о Тройке",
          "Обитаемый остров",
          "Отель „У Погибшего Альпиниста",
          "Малыш",
          "Пикник на обочине",
          "Парень из преисподней",
          "За миллиард лет до конца света",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              { index % 2 ? <FaceIcon /> : <InsertEmoticonIcon /> }
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    );
  }
}
