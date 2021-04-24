import React, {useState, useEffect, useContext, useMemo} from 'react';
import {AppContext} from '../context/app/AppContext';
import {randomText} from '../helps/funcs';
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { useParams } from 'react-router-dom';
import {
  ChatContainer,
  Message,
  MessageInput,
  MessageList,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';

export const MessList = () => {

  const { messages_list, addMessage, chat_list } = useContext(AppContext);

  const {id} = useParams();
  const [inputValue, setInputValue] = useState('');
  const [botIsWriting, setBotIsWriting] = useState(false);

  const handleInput = (value) => {
    setInputValue(value);
  }

  useEffect(() => {
    if (id &&
        id <= Object.keys(chat_list).length - 1 &&
        messages_list &&
        messages_list[id][messages_list[id].length - 1].autor !== 'Bot' &&
        botIsWriting !== true) {
      setBotIsWriting(true);
      setTimeout(() => {
        addMessage({
          id: messages_list[id].length,
          msg: randomText(),
          autor: 'Bot'
        }, id)
        setBotIsWriting(false);
      }, 2000)
    }
  }, [messages_list])


  const handleClick = () => {
    addMessage({
      id: messages_list[id].length,
      msg: inputValue,
      autor: 'User'
    }, id);
    setInputValue('');
  }

  console.log(+id <= Object.keys(chat_list).length - 1);
  return (
      id && +id <= Object.keys(chat_list).length - 1 ?
      <ChatContainer>
              <MessageList typingIndicator={botIsWriting && <TypingIndicator content="Бот набирает сообщение" />}>
                {
                  messages_list[id].map((item, i) => {
                    if (item.autor === 'Bot') {
                      return <Message model={{
                        message: item.msg,
                        sentTime: "Только что",
                        sender: item.autor,
                        direction: "incoming",
                        position: "single"
                      }} key={i} />
                    } else {
                      return <Message model={{
                        message: item.msg,
                        sentTime: "Только что",
                        sender: item.autor,
                        direction: "outgoing",
                        position: "single"
                      }} key={i}/>
                    }
                  })
                }
              </MessageList>
              <MessageInput autoFocus value={inputValue} onChange={handleInput} onSend={handleClick} />
      </ChatContainer> : <div className='center_wrapper'><span>Чат не выбран</span></div>
  )
}
