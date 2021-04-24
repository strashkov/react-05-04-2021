import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Layout from './Layout.jsx';


export default class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={ Layout } />
                <Route path='/chat/:id' render={(props) => {
                    return <Layout chatId={props.match.params.id} />
                }}/>
            </Switch>
        )
    }
}
