import React, { Component } from 'react'
import {
    Switch,
    Route,
    // Redirect
} from "react-router-dom";
import PropTypes from 'prop-types'
import Layout from '../containers/Layout';


export default class Router extends Component {
    static propTypes = {
        chatId: PropTypes.string,
        chatText: PropTypes.string,
    }
    render() {        
        return (
            <Switch>
                <Route exact path='/' component={Layout} />
                <Route exact path='/chat/:id' render={(props) => {                  
                    return <Layout chatId={props.match.params.id} />
                }} />                
                <Route exact path="/profile" render={() => {
                    return <Layout chatId={"profile"} />;
                }} />
            </Switch>
        )
    }
}
