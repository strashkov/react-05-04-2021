import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { updateMessagesData } from '../../redux/chats-reducer';
import { setCurrentChat } from '../../redux/chats-reducer';
import MessageField from './MessageField';

class MessageFieldContainer extends React.Component {
  constructor(props) {
    super(props);
    this.messageFieldRef = React.createRef();
  }

  componentDidUpdate(prevProps, prevState) {
    const idx = this.props.match.params?.chatId - 1;
    if (
      prevProps.chats[idx]?.messages.length <
        this.props.chats[idx]?.messages.length &&
      this.props.chats[idx]?.messages[this.props.chats[idx].messages.length - 1]
        .author === 'me'
    ) {
      setTimeout(() => this.props.updateMessagesData('bot'), 1000);
    }
    if (
      prevProps.chats[idx]?.messages.length <
      this.props.chats[idx]?.messages.length
    ) {
      this.messageFieldRef.current.scrollTop =
        this.messageFieldRef.current.scrollHeight -
        this.messageFieldRef.current.clientHeight;
    }
  }

  render() {
    return (
      <MessageField {...this.props} messageFieldRef={this.messageFieldRef} />
    );
  }
}

const WithChatIdMessageFieldContainer = withRouter(MessageFieldContainer);

const mapStateToProps = state => ({
  chats: state.messenger.chats,
});

export default connect(mapStateToProps, { setCurrentChat, updateMessagesData })(
  WithChatIdMessageFieldContainer
);
