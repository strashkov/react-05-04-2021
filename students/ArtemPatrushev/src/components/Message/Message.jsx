import React from 'react';
import PropTypes from 'prop-types';
import s from './Message.module.css';

export default class Message extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
    }

    render() {
        // можно подключить стили и через переменную - в таком случае лоадеры не нужны в webpack

        // const style = {
        //     backgroundColor: 'lightblue',
        //     color: 'white'
        // };

        // return <div /*style={style}*/>{`${this.props.author}: ${ this.props.text }`}</div>;

        return (
            <div className={s.message} style={{alignSelf: this.props.author === 'bot' ? 'flex-start' : 'flex-end'}}>
                <div>{this.props.text}</div>
                <div className={s.messageSender}>{this.props.author}</div>
            </div>
        )
    }
}