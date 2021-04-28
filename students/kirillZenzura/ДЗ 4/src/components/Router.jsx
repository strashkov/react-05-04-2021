import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Layout from '../containers/Layout';


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
