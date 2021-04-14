import React from 'react';
import Child from './Child.jsx';

export default class App extends React.Component {
    state = {
        text: 'App component',
        counter: 0
    }

    componentDidMount() {
        console.log('App componentDidMount')
    }

    componentDidUpdate() {
        console.log('App componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('App componentWillUnmount')
    }

    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        })

        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        console.log('App render')
        //
        return (
            <>
                <h1>{this.state.text}</h1>
                <Child message={String(this.state.counter)} />
                <button onClick={this.handleClick}>+1</button>
            </>
        )
    }
}

