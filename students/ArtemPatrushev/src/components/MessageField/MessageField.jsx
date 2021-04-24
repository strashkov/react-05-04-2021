import React from 'react';
import Message from '../Message/Message.jsx';
import PropTypes from 'prop-types';
import s from './MessageField.module.css';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';


export default class MessageField extends React.Component {
    static propTypes = {
        messages: PropTypes.arrayOf(PropTypes.shape({   // Приходит массив объектов с описанием свойств объекта
            author: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })),
        onSendNewMessage: PropTypes.func.isRequired

    };

    state = {
        input: '' // определяем input для компонента
    };

    constructor(props) {
        super(props);

        this.messageFieldRef = React.createRef();
    };

    componentDidUpdate() {
        this.messageFieldRef.current.scrollTop = this.messageFieldRef.current.scrollHeight - this.messageFieldRef.current.clientHeight;
    };

    // данная функция по отпровки сообщения обчно делается отдельно, а функции-hadle (которые прописаны ниже), вызывают эту функцию + могут ставить условия
    sendMessage = () => {
        this.props.onSendNewMessage(this.state.input);
        this.setState({
            input: '' // после отправки очищаем поле ввода у input
        });
    };

    handleClick = () => {
        this.sendMessage();
    };

    handleInputKeyUp = (event) => {
        if (event.keyCode === 13) { // берем событие, проверяем на какой клавише оно произошло (по коду клавиши (нужно гуглить)), 13 - код enter
            this.sendMessage();
        }
    };

    handleChangeInput = (/*event*/ { target: { value } }) => {
        console.log(value);
        this.setState({
            input: /*event.target.value*/ value // меянем state класса компонента, через прослушивание input 
        });
    };

    render() {

        // const { chatId } = this.props;     // или так: const chatId = this.props.chatId;

        // if (!chatId) {
        //     return <div className={s.emptyChat}>Check a chat</div>;  // если данное условие подходит, то рендерится эта разметка
        // }

        const messageElements = this.props.messages.map(({ text, author }, index) => (
            <Message key={index} text={text} author={author} />
        ));

        return (
            <div className={s.messageFieldWrapper}>
                <div /*ref={this.messageFieldRef}*/ ref={this.messageFieldRef} className={s.messageField}>
                    {messageElements}
                </div>
                <div className={s.actionInputBlock}>
                    <TextField                            // это специальный тег от библиотеки material UI
                        className={s.textField}
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