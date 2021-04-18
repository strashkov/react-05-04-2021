import React, {useState, useEffect, createRef} from 'react';
import {randomText} from '../helps/funcs';
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

import {
  ChatContainer,
  Message,
  MessageInput,
  MessageList,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';

export const MessList = () => {
  const [messages, setMessages] = useState([
    {
      id: 0,
      msg: 'Привет',
      autor: 'User'
    },
    {
      id: 1,
      msg: 'Привет, я бот Владимир!',
      autor: 'Bot'
    }]);
  const [inputValue, setInputValue] = useState('');
  const [botIsWriting, setBotIsWriting] = useState(false);

  const handleInput = (value) => {
    setInputValue(value);
  }

  useEffect(() => {
    if (messages[messages.length - 1].autor !== 'Bot' && botIsWriting !== true) {
      setBotIsWriting(true);
      setTimeout(() => {
        setMessages(prevMess => [...prevMess, {
          id: prevMess.length,
          msg: randomText(),
          autor: 'Bot'
        }])
        setBotIsWriting(false);
      }, 2000)
    }
  }, [messages])

  const handleClick = () => {
    setMessages(prevMess => [...prevMess, {
      id: prevMess.length,
      msg: inputValue,
      autor: 'User'
    }]);
    setInputValue('');
  }

  return (
      <ChatContainer>
        <MessageList typingIndicator={botIsWriting && <TypingIndicator content="Бот набирает сообщение" />}>
          {
            messages.map((item, i) => {
              if (item.autor === 'Bot') {
                return <Message model={{
                  message: item.msg,
                  sentTime: "Только что",
                  sender: item.autor,
                  direction: "incoming",
                  position: "single"
                }} />
              } else {
                return <Message model={{
                  message: item.msg,
                  sentTime: "Только что",
                  sender: item.autor,
                  direction: "outgoing",
                  position: "single"
                }} />
              }
            })
          }
        </MessageList>
        <MessageInput autoFocus value={inputValue} onChange={handleInput} onSend={handleClick} />
      </ChatContainer>
  )
}
