import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Profile from '../Profile/Profile';


export default class Router extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    };

    render() {
        return (
            <Switch>
                <Route exact path='/' render={() => {
                    return <Redirect to='/chat/1' />
                }} />
                <Route exact path='/chat/:id' render={(props) => {
                    return <Layout chatId={props.match.params.id} />
                }} />
                <Route exact path="/profile" component={Profile} />
            </Switch>
        )
    }
}