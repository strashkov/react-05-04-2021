import React from 'react';
import Child from './Child.jsx';

export default class App extends React.Component {
    state = {
        text: 'App component',
        counter: 0
    }

    // componentDidMount() {
    //     console.log('App componentDidMount')
            // setTimeout(() => {
            //     this.setState({
            //         text:"New State"
            //     })
            // }, 1000); 
    // }

    // componentDidUpdate() {
    //     console.log('App componentDidUpdate')
    // }

    // componentWillUnmount() {
    //     console.log('App componentWillUnmount')
    // }
//   изменение состояния на основе текущего - через callback-функцию
    handleClick = () => {
        this.setState ((state) => ({ 
            counter: state.counter + 1
        })); 
    }
  
    render() {
        console.log('App render')   
        
        return (
            <>
                <h1>{this.state.text}</h1>
                {/* {this.state.counter < 5 ? <Child message={this.state.counter} /> : null} */}
                <Child message={String(this.state.counter)} />
                <button onClick={this.handleClick}>+1</button>
            </>
        )
    }
}

