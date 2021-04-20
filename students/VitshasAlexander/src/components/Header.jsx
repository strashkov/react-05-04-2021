import React from "react";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class Header extends React.Component {
  static propTypes = {
    chatId: PropTypes.string
  };
  render() {
    return (
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Geekbrains messenger. Чат {this.props.chatId || 'не выбран'}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
