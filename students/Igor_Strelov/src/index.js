import React from 'react';
import ReactDOM from 'react-dom';
import {MessList} from './containers/MessList';
import {randomText} from './helps/funcs';

const array = [
  {
    id: 0,
    msg: 'Привет',
    autor: 'bot'
  },
  {
    id: 1,
    msg: 'Hello',
    autor: 'Alex'
  },
  {
    id: 2,
    msg: 'Salute',
    autor: 'bot'
  },
  {
    id: 3,
    msg: 'Hi',
    autor: 'Donald T.'
  },
]

const render = () => {
  ReactDOM.render(
      <MessList messages={array} onPress={(inputValue) => {
        console.log(inputValue);
        array.push({
          id: array[array.length - 1].id + 1,
          msg: inputValue,
          autor: 'Igor'
        })
        render()
        setTimeout(() => {
          array.push({
            id: array[array.length - 1].id + 1,
            msg: randomText(),
            autor: 'bot'
          })
          render()
        }, 3000)
      }}/>,
      document.getElementById('app'));
}


render()

