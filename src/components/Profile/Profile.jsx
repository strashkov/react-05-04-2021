import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class Profile extends React.Component {
    static propTypes = {
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired
    };

    render() {
        const { firstName, lastName } = this.props;

        return (
            <div className="profile">
                <p><span>First Name:</span> {firstName}</p>
                <p><span>Last Name:</span> {lastName}</p>
            </div>
        );
    }
}
