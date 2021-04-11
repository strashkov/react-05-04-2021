import React, { createRef } from 'react';
import {Button} from './child/Button';
import { Message } from './child/Message';

export const MessList = ({ messages, onPress }) => {
  const input = createRef();
  return (
      <>
        <div style={styles.wrapper}>
          {messages.map((item, i) => <Message key={i} message={item}/>)}
          <div style={styles.pannelWrapper}>
              <input ref={input} style={styles.input} placeholder={'Введите сообщение'}/>
              <Button style={styles.button} onPress={() => onPress(input.current.value)}>Отправить сообщение</Button>
          </div>
        </div>
      </>
  )
}


const styles = {
  wrapper: {
    margin: '0 auto',
    maxWidth: 600,
    flex: 1
  },
  pannelWrapper: {
    flexDirection: 'row',
    margin: '0 auto',
    maxWidth: 600,
    display: 'flex',
    width: '100%',
    height: 40
  },
  input: {
    display: 'flex',
    flex: 1,
    borderRadius: 20,
    boxShadow: 'none',
    outline: 'none',
      '-webkit-appearance': 'none'
  },
  button: {
    width: 200,
    border: null
  }
}
