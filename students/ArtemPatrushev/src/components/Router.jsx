import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout/Layout.jsx';
import Profile from './Profile/Profile.jsx';
import Header from './Header/Header.jsx';


export default class Router extends React.Component {
    render() {
        return (
                    <Switch>
                        <Route exact path='/' component={Layout} />
                        <Route exact path='/chat/:id' render={(props) => {
                            return <Layout chatId={props.match.params.id} /> // данная запись позволяет рендерить чаты (чтобы не повторять их в коде руками)
                        }} />
                        <Route path='/profile' render={() => <Profile />} />
                    </Switch>
        )
    }
}