import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
    static propTypes = {
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    };

    render() {
        // in-line  стилизация
        // const style = {
        //     backgroundColor: 'red',
        //     fontSize: '24px'
        // };
        // return <div style={style}> {this.props.author + ": " + this.props.text}</div>
        

         
        return (
         <div className="message"
                style={ { alignSelf: this.props.author === 'Robocop' ?
                        'flex-start' : 'flex-end' } }>
                <div>{ this.props.text }</div>
                <div className="message-author">{ this.props.author }</div>
            </div>

        )
    }
}  