import React from 'react';
import { Switch, Route} from 'react-router-dom'
import Layout from '../Layout.jsx';


export default class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' render={ (props) => {return <Layout/>}} />
                <Route path='/chat/:id' render={(props) => {
                    return <Layout chatId={props.match.params.id} />
                }}/>
            </Switch>
        )
    }
}