import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom'
import Layout from '../components/Layout/index.jsx';
import MessageField from '../containers/MessageField.js';
import Profile from '../containers/Profile.js';
import { CHAT_PATTERN } from '../constants/index.js';


export default class Router extends React.Component {
    static propTypes = {
        chats: PropTypes.object.isRequired
    };
    render() {
        return (
            <Switch>
                <Route exact path='/' render={() => (
                    <Redirect to='/profile' />
                )} />
                <Route path={CHAT_PATTERN} render={(props) => {
                    const chatId = props.match.params.id;


                    return (
                        <Layout
                            title={`Messages: ${this.props.chats[chatId]?.title || ''}`}
                            chatId={chatId}>
                            <MessageField chatId={chatId} />
                        </Layout>
                    );
                }} />
                <Route path='/profile' render={() => (
                    <Layout title='Profile Page'>
                        <Profile />
                    </Layout>
                )} />
            </Switch>
        )
    }
}