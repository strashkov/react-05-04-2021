import React from 'react';
import PropTypes from 'prop-types'

export default class Child extends React.Component {
    static propTypes = {
        message: PropTypes.number
    }

    render() {
        console.log('Child render')

        return (
            <h1>{this.props.message}</h1>
        )
    }
}

