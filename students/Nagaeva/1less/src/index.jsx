import React from 'react';
import ReactDom from 'react-dom';

const languages = [
    'JS', 'PHP', 'C++', 'Python', 'Java'
];

const Message = ({ el }) => {
    return (
        <div>{ el }</div>
    );
};

const MessageList = ({ languages }) => {
    return languages.map((el) => {
        return <Message el={ el }/>
    })
};

const Input = () => {
    return <input type="text" id="input"/>
}

const Button = (props) => {
    const handleClick = () => {
        languages.push(input.value)
        ReactDom.render(
            <>
                <MessageList languages={ languages } />
                <Input />
                <Button>Add</Button>
            </>,
            document.getElementById('app')
        );
        input.value = ''
    }
    return <button onClick={ handleClick }>{ props.children }</button>
};

ReactDom.render(
    <>
        <MessageList languages={ languages } />
        <Input/>
        <Button>Add</Button>
    </>,
    document.getElementById('app')
);