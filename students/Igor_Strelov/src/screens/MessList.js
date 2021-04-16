import React from 'react';
import {randomText} from '../helps/funcs';
import {Button} from './child/Button';
import { Message } from './child/Message';

export default class MessList extends React.Component {
  state = {
    messages: [
        {
          id: 0,
          msg: 'Привет',
          autor: 'User'
        },
        {
          id: 1,
          msg: 'Hello',
          autor: 'Bot'
        }],
    inputValue: '',
    botIsWriting: false
  }

  handleInput = (event) => {
      this.setState(() => {
        return {inputValue: event.target.value}
      })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.messages[this.state.messages.length - 1].autor !== 'Bot' && this.state.botIsWriting !== true) {
      console.log('update');
      setTimeout(() => {
        this.setState(() => {
          return {
            botIsWriting: true
          }
        })
      }, 1000)
      setTimeout(() => {
        this.setState(prev => {
          return {
            messages: [...prev.messages, {
              id: prev.messages[prev.messages.length - 1].id + 1,
              msg: randomText(),
              autor: 'Bot'
            }],
            botIsWriting: false
          }
        })
      }, 3000)
    }
  }

  handleClick = () => {
    this.setState(prev => {
      return {
        messages: [...prev.messages, {
          id: prev.messages[prev.messages.length - 1].id + 1,
          msg: prev.inputValue,
          autor: 'User'
        }],
        inputValue: ''
      }
    })
  }

  render () {
    return (
        <>
          <div style={styles.wrapper}>
            { this.state.messages.map((item, i) => <Message key={i} message={item}/>)}
            {this.state.botIsWriting && <p style={styles.botInputIndicator}>Бот набирает сообщение</p> }
            <div style={styles.pannelWrapper}>
              <input style={styles.input}
                     value={this.state.inputValue}
                     placeholder={'Введите сообщение'}
                     onChange={this.handleInput}/>
              <Button disabled={this.state.inputValue.length === 0} style={styles.button} onPress={this.handleClick}>Отправить сообщение</Button>
            </div>
          </div>
        </>
    )
  }
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
    padding: 5,
    borderColor: '#68c6fe',
    borderStyle: 'solid'
  },
  button: {
    width: 200,
    borderRadius: 20,
    borderColor: '#68c6fe',
    backgroundColor: '#68c6fe',
    borderStyle: 'solid'
  },
  botInputIndicator: {
    justifyContent: 'flex-end',
    display: 'flex'
  }
}
