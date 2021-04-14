import React from 'react';
import Child from './Child.jsx';


export default class App extends React.Component {
    state = {
        text: 'React component',
        childText: 'Child component',
        counter: 0
    }
    // constructor(props) {
    //     super(props);
    // }

    // componentDidMount() {
    //     setTimeout(() => {
    //       this.setState({
    //           text: 'New state'
    //       })  
    //     }, 1000);
    // }

    handleClick = () => {
        this.setState((state) => ({
            counter: state.counter + 1
        }));
    }

    render() {
        return (
            <>
                <h1>{this.state.text}</h1>
                <Child counter={this.state.counter} />
                {/* Условный рендеринг */}
                {/* {
                    this.state.counter < 5 ? <Child counter={this.state.counter} /> : null
                } */}
                <button onClick={this.handleClick}>+1</button>
            </>
        )
    }
}