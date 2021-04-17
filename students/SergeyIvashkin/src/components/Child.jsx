import React from 'react';
import propTypes from 'prop-types';


export default class Child extends React.Component {
   static propTypes = {
       text: propTypes.number
   }


   

    render() {
        console.log('Child render')
        //
        return (
            <>
                <h1>{this.props.text}</h1>
            </>
        )
    }
}