import React, {Fragment} from 'react';
import ReactDom from 'react-dom';
// const element = React.createElement('div', {
// className: 'my-class',
// id: 'my-div'
// }, 'React JS')
const messages = [
  'hello',
  'привет',
  'всем привет',
  'Last hello'
];

const Message = ({ message }) => {
  return (
    <div className='message'>
      {message}
    </div>)
};

const MessageList = ({ messages }) => {
return messages.map((message, i)=> {
  return <Message key={i} message = {message}/>
});
};

const Button = (props) => {
  const handleClick = (event) => {
    messages.push('New message');
    clickRender();
  };
  return <button  onClick = {handleClick}>{props.children}</button>
} 
function clickRender() {
  ReactDom.render(
    <>
      <MessageList messages={messages}/>
      <Button>Кнопка</Button>
    </>,
  document.getElementById('app')
  );
}
clickRender();