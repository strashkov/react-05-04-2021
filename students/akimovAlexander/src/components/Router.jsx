import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Profile from './profile.jsx';

export default class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Layout} />
                <Route exact path='/chat/:id' render={(props) =>
                    <Layout chatId={props.match.params.id} />
                } />
                <Route exact path='/profile' render={(props) =>
                    <Profile /> /*urlProfile={props.match.params.profile}*/
                }
                />

            </Switch>
        )
    }
}