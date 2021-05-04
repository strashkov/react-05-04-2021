import React from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import { CHAT_PATTERN } from '../constants/index.js';
import MessageField from './MessageField';
import Layout from './Layout';
import MyProfile from '../containers/MyProfile';
import PropTypes from 'prop-types';

export default class Router extends React.Component {
  static propTypes = {
    chats: PropTypes.object.isRequired
  };
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => (
                    <Redirect to='/profile'/>
                )} />
        <Route exact path={CHAT_PATTERN} render={ (props) => {
          const chatId = props.match.params.id;
          return (
            <Layout
              title={`Messages: ${this.props.chats[chatId]?.title}`}
              chatId={chatId}>
              <MessageField chatId={chatId} />
            </Layout> 
        )}} />
        <Route exact path='/profile/' render={() => (
          <Layout title='MyProfile'>
            <MyProfile />
          </Layout>
        )} />
      </Switch>
    )
  }
}