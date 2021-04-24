import React from 'react';
import PropTypes from 'prop-types';

export default class Child extends React.Component {
    static propTypes = {
        counter: PropTypes.number
    }
    // state = {
    //     text: 'Child component'
    // }
    // constructor(props) {
    //     super(props);
    // }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             text: 'New state'
    //         })
    //     }, 1000);
    // }

    render() {
        return (
            <h1>{this.props.counter}</h1>
        )
    }
}