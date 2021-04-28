import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Layout from './Layout.jsx';
import MyProfile from './MyProfile.jsx';

export default class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Layout} />
        <Route exact path='/chat/:id/:them' render={ (props) => {
          return <Layout chatId={props.match.params.id} them={props.match.params.them}/>
        }} />
        <Route exact path='/profile/' component={MyProfile}/>
      </Switch>
    )
  }
}