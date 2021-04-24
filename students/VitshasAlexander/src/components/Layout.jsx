import React from "react";
import PropTypes from "prop-types";

import Container from "@material-ui/core/Container";

import Header from "../containers/Header";
import Profile from "../containers/Profile";
import ChatList from "../containers/ChatList";
import MessageFields from "../containers/MessageFields";

export default class Layout extends React.Component {
  static propTypes = {
    chatId: PropTypes.string,
    // chats: PropTypes.object.isRequired,
    // messages: PropTypes.object.isRequired,
    // sendMessage: PropTypes.func.isRequired,
    showProfile: PropTypes.bool,
  };

  static defaultProps = {
    showProfile: false,
    chatId: "1",
  };

  render() {
    const { chatId, showProfile } = this.props;

    return (
      <Container maxWidth="md">
        <Header chatId={chatId} showProfile={showProfile} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "50px",
          }}
        >
          <ChatList
            // chats={Object.entries(chats).map(([key, obj]) => ({
            //   id: key,
            //   title: obj.title,
            // }))}
            chatId={chatId}
            // OnAddChat={this.OnAddChat}
          />
          {showProfile ? (
            <Profile />
          ) : (
            <MessageFields
              // messages={activeMessages}
              chatId={chatId}
              // chats={chats}
              //OnSendMessage={this.handleSendMessage}
            />
          )}
        </div>
      </Container>
    );
  }
}
