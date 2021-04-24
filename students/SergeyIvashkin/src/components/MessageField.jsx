import React from "react";
import Message from "./Message.jsx";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import Fab from "@material-ui/core/Fab";
import "../styles/style.css";

export default class MessageField extends React.Component {
  static propTypes = {
    chatId: PropTypes.string,
    messages: PropTypes.array,
  };

  state = {
    messages: {
      1: [
        {
          author: "me",
          message: "Привет!",
        },
        {
          author: "me",
          message: "Как дела?",
        },
      ],
      2: [
        {
          author: "me",
          message: "чат 2",
        },
      ],
      3: [
        {
          author: "me",
          message: "чат 3",
        },
      ],
    },
    input: "",
  };

  constructor(props) {
    super(props);

    this.messageFieldRef = React.createRef();
  }

  componentDidUpdate(prevProps, prevState) {
    const { chatId } = this.props;
    if (
      prevState.messages[chatId].length !==
        this.state.messages[chatId].length &&
      this.state.messages[chatId][this.state.messages[chatId].length - 1]
        .author !== "robot"
    ) {
      setTimeout(
        () =>
          this.setState((state) => ({
            messages: {
              ...state.messages,
              [chatId]: [
                ...state.messages[chatId],
                {
                  author: "robot",
                  message: "Не приставай ко мне, я робот!",
                },
              ],
            },
          })),
        1000
      );
    }
    this.messageFieldRef.current.scrollTop =
      this.messageFieldRef.current.scrollHeight -
      this.messageFieldRef.current.clientHeight;
  }

  sendMessage = () => {
    const { chatId } = this.props;

    this.setState((state) => ({
      messages: {
        ...state.messages,
        [chatId]: [
          ...state.messages[chatId],
          {
            author: "me",
            message: state.input,
          },
        ],
      },

      input: "",
    }));
  };

  handleClick = () => {
    const { chatId } = this.props;
    this.setState((state) => ({
      messages: {
        ...state.messages,
        [chatId]: [
          ...state.messages[chatId],
          {
            author: "me",
            message: this.state.input,
          },
        ],
      },
      input: "",
    }));
  };

  handleInputKeyUp = (event) => {
    if (event.keyCode === 13) {
      this.sendMessage();
    }
  };

  handleChangeInput = ({ target: { value } }) => {
    this.setState({
      input: /*event.target.value*/ value,
    });
  };

  render() {
    if (!this.props.chatId) {
      return <div className="empty-chat">Выберите чат</div>;
    }
    const messageElements = this.state.messages[
      this.props.chatId
    ].map(({ message, author }, index) => (
      <Message key={index} author={author} text={message} />
    ));

    return (
      <div className="chat">
        <div ref={this.messageFieldRef} className="message-field">
          {messageElements}
        </div>
        <div className="actions">
          <TextField
            placeholder="Введите сообщение"
            fullWidth
            value={this.state.input}
            autoFocus
            type="text"
            onKeyUp={this.handleInputKeyUp}
            onChange={this.handleChangeInput}
          />
          <Fab disabled={!this.state.input} onClick={this.handleClick}>
            <SendIcon />
          </Fab>
        </div>
      </div>
    );
  }
}
