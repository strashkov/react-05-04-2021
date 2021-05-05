import React from "react";
import Message from "./message/index.jsx";
import TextField from "@material-ui/core/TextField";
import "../styles/style.css";
import PropTypes from "prop-types";
// import CircularProgress from 'material-ui/CircularProgress';

export default class MessageField extends React.Component {
  static propTypes = {
    chatId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    chats: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired,
    sendMessage: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    loadChats: PropTypes.func.isRequired,
  };

  state = {
    input: "",
  };

  constructor(props) {
    super(props);

    this.messageFieldRef = React.createRef();
  }

  componentDidUpdate() {
    this.messageFieldRef.current.scrollTop =
      this.messageFieldRef.current.scrollHeight -
      this.messageFieldRef.current.clientHeight;
  }

  componentDidMount() {
    this.props.loadChats();
    // this.props.loadMessages();
    // fetch('/api/messages.json'
    // ).then(body => body.json()).
    // then(json => {
    //     json.forEach(msg => {
    //         this.props.sendMessage(msg.id, msg.text, msg.sender, msg.chatId);
    //     })
    // })
 }


  sendMessage = () => {
    const { input } = this.state;

    if (!input) {
      return;
    }

    const { chatId, messages } = this.props;
    const messageId = Object.keys(messages).length + 1;

    this.props.sendMessage({
      messageId,
      chatId,
      text: input,
      sender: "me",
    });

    this.setState({
      input: "",
    });
  };

  handleChangeInput = ({ target: { value } }) => {
    this.setState({
      input: value,
    });
  };

  handleInputKeyUp = (event) => {
    if (event.keyCode === 13) {
      this.sendMessage();
    }
  };

  render() {
  //   if (this.props.isLoading) {
  //     return <CircularProgress />
  // }
    const { chats, messages, chatId } = this.props;

    const messageElements = chats[chatId].messageList.map((messageId) => {
      const { text, sender } = messages[messageId];

      return <Message key={messageId} text={text} sender={sender} />;
    });

    return (
      <div className="message-field-wrapper">
        <div ref={this.messageFieldRef} className="message-field">
          {messageElements}
        </div>
        <div className="actions">
          <TextField
            style={{ marginRight: "12px" }}
            placeholder="Введите сообщение"
            fullWidth
            value={this.state.input}
            type="text"
            autoFocus
            onKeyUp={this.handleInputKeyUp}
            onChange={this.handleChangeInput}
          />
          <button
            color="primary"
            disabled={this.state.input === ""}
            onClick={this.sendMessage}
          >Send</button>
        </div>
      </div>
    );
  }
}
