import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "../../components/Layout";
import MessageField from "../../containers/MessageFields";
import Profile from "../../containers/Profile";

export default class Router extends React.Component {
  static propTypes = {
    chats: PropTypes.object.isRequired,
  };
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/profile" />} />
        <Route exact path="/chat" render={() => <Redirect to="/chat/1" />} />
        <Route
          path="/chat/:id"
          render={(props) => {
            const chatId = props.match.params.id;
            const { chats } = this.props;
            if (
              !chatId.match(/^\d+$/) ||
              chatId === undefined ||
              chatId > Object.keys(chats).length ||
              chatId < 1
            )
              return <Redirect to="/chat/1" />;
            return (
              <Layout
                title={`Messages: ${chats[chatId].title}`}
                chatId={chatId}
              >
                <MessageField chatId={chatId} />
              </Layout>
            );
          }}
        />
        <Route
          path="/profile"
          render={() => (
            <Layout title="Profile page">
              <Profile />
            </Layout>
          )}
        />
      </Switch>
    );
  }
}
