import React from "react";
import { TextField, FloatingActionButton } from "material-ui";
import SendIcon from "material-ui/svg-icons/content/send";
import Message from "./Message.jsx";
import "../styles/styles.css";

export default class MessageField extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  state = {
    chats: {
      1: { title: "Чат 1", messageList: [1] },
      2: { title: "Чат 2", messageList: [2] },
      3: { title: "Чат 3", messageList: [] },
    },
    messages: {
      1: { text: "Привет!", sender: "bot" },
      2: { text: "Здравствуйте!", sender: "bot" },
    },
    input: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const { messages } = this.state;
    if (
      Object.keys(prevState.messages).length < Object.keys(messages).length &&
      Object.values(messages)[Object.values(messages).length - 1].sender ===
        "me"
    ) {
      setTimeout(
        () => this.handleSendMessage("Не приставай ко мне, я робот!", "bot"),
        1000
      );
    }
  }

  handleSendMessage = (message, sender) => {
    const { messages, chats, input } = this.state;
    const { chatId } = this.props;

    if (input.length > 0 || sender === "bot") {
      const messageId = Object.keys(messages).length + 1;
      this.setState({
        messages: {
          ...messages,
          [messageId]: { text: message, sender: sender },
        },
        chats: {
          ...chats,
          [chatId]: {
            ...chats[chatId],
            messageList: [...chats[chatId]["messageList"], messageId],
          },
        },
      });
    }
    if (sender === "me") {
      this.setState({ input: "" });
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      // Enter
      this.handleSendMessage(this.state.input, "me");
    }
  };

  render() {
    const { messages, chats } = this.state;
    const { chatId } = this.props;

    const messageElements = chats[
      chatId
    ].messageList.map((messageId, index) => (
      <Message
        key={index}
        text={messages[messageId].text}
        sender={messages[messageId].sender}
      />
    ));

    return [
      <div>
        <div key="messageElements" className="message-field">
          {messageElements}
        </div>
        <div key="textInput" style={{ width: "100%", display: "flex" }}>
          <TextField
            name="input"
            fullWidth
            hintText="Введите сообщение"
            style={{ fontSize: "22px" }}
            onChange={this.handleChange}
            value={this.state.input}
            onKeyUp={this.handleKeyUp}
          />
          <FloatingActionButton
            onClick={() => this.handleSendMessage(this.state.input, "me")}
          >
            <SendIcon />
          </FloatingActionButton>
        </div>
      </div>,
    ];
  }
}
