import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import PropTypes from 'prop-types'
import Layout from '../components/Layout/Layout';
import MessageField from '../containers/MessageField';
import Profile from '../containers/Profile';

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
                <Route path='/chat/:id' render={(props) => {
                    const chatId = props.match.params.id;

                    return (
                        <Layout
                            title={`Чат: ${this.props.chats[chatId].title}`}
                            chatId={chatId}>
                            <MessageField chatId={chatId} />
                        </Layout>
                    );
                }}/>
                <Route path='/profile' render={() => (
                    <Layout title='Страница профиля'>
                        <Profile />
                    </Layout>
                )} />
            </Switch>
        )
    }
}
