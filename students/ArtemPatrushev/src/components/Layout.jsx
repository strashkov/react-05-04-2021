import React from 'react';
import ChatList from './ChatList.jsx';
import Header from './header.jsx';
import MessageField from './MessageField.jsx';


export default class Layout extends React.Component {
    // state = {
    //     text: 'React component',
    //     childText: 'Child component',
    //     counter: 0
    // }

    // handleClick = () => {
    //     this.setState((state) => ({
    //         counter: state.counter + 1
    //     }));
    // }

    render() {
        return (
            <div>
                <Header />
                <div style={{display: 'flex'}}>
                    <ChatList style={{width: '20%'}} />
                    <MessageField style={{ width: '80%' }} />
                </div>
            </div>
        );
    };
}