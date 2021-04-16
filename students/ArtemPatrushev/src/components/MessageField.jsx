import React from 'react';
import Message from './Message.jsx';
import '../styles/styles.css';
import TextField from '@material-ui/core/TextField'; // подключили библиотеку material UI
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';


export default class MessageField extends React.Component {
    state = {
        messages: [
            {
                text: 'Привет!',
                author: 'bot'
            },
            {
                text: 'Как дела?',
                author: 'bot'
            }
        ],
        input: '' // определяем input для компонента
    };

    constructor(props) {
        super(props);

        this.messageFieldRef = React.createRef();
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.messages.length !== prevState.messages.length) {       // условие поставлено, чтобы постоянные изменения стейта (через input) не выдавали баг, из-за которого ответ приходит на каждый введенный символ в input за 1 сек
            if (this.state.messages[this.state.messages.length - 1].author !== 'bot') {
                setTimeout(() =>
                    this.setState((state) => ({
                        messages: [...state.messages, { text: 'Не приставай ко мне, я робот', author: 'bot' }]
                    })
                    ), 1000);
            };
        };

        this.messageFieldRef.current.scrollTop = this.messageFieldRef.current.scrollHeight - this.messageFieldRef.current.clientHeight;
    };

    // данная функция по отпровки сообщения обчно делается отдельно, а функции-hadle (которые прописаны ниже), вызывают эту функцию + могут ставить условия
    sendMessage = () => {
        this.setState((state) => ({
            messages: [
                ...state.messages,
                {
                    text: state.input, // помещаем измененный state.input класса компонента в сообщение
                    author: 'Вова'
                }
            ],
            input: '' // после отправки очищаем поле ввода у input
        }));
    };

    handleClick = () => {
        this.sendMessage();
    };

    handleInputKeyUp = (event) => {
        if (event.keyCode === 13) { // берем событие, проверяем на какой клавише оно произошло (по коду клавиши (нужно гуглить)), 13 - код enter
            this.sendMessage();
        }
    };

    handleChangeInput = (/*event*/ { target: {value} }) => {
        console.log(value);
        this.setState({
            input: /*event.target.value*/ value // меянем state класса компонента, через прослушивание input 
        });
    };

    render() {
        const messageElements = this.state.messages.map(({ text, author }, index) => (
            <Message key={index} text={text} author={author} />
        ));

        return (
            <div className='layout'>
                <div /*ref={this.messageFieldRef}*/ ref={this.messageFieldRef} className='message-field'>
                    {messageElements}
                </div>
                <div className='action'>
                    <TextField                              // это специальный тег от библиотеки material UI
                        style={{paddingRight: '12px'}}
                        value={this.state.input}
                        autoFocus
                        fullWidth
                        placeholder='Введите сообщение'
                        onKeyUp={this.handleInputKeyUp}
                        onChange={this.handleChangeInput} />
                        {/* <input 
                            type="text" 
                            value={this.state.input} // считываем значение инпута в state класса компонента
                            onChange={this.handleChangeInput}
                            autoFocus
                            onKeyUp={this.handleInputKeyUp} // событие отпущенной клавиши, ставится на input, т.к. фокус именно на нем
                            />  */}
                    <Fab                                  // спец тег от material UI
                        // color='primary'
                        disabled={this.state.input === ''} // если в инпуте ничего не прописано, то кнопка не активна
                        onClick={this.handleClick}
                        >
                        <SendIcon />
                    </Fab>
                    {/* </div> */}
                </div>
            </div>
        );
    };
}