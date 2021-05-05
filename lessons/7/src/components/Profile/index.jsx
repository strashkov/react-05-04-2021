import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from "@material-ui/core/CircularProgress";
import './style.css';

export default class Profile extends React.Component {
    static propTypes = {
        isLoading: PropTypes.bool,
        profile: PropTypes.shape({
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired
        }).isRequired,
        loadProfile: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.loadProfile();
    }

    render() {
        const { profile, isLoading } = this.props;

        if (isLoading) {
            return <CircularProgress />;
        }
        return (
            <div className="profile">
                <p><span>First Name:</span> {profile?.firstName}</p>
                <p><span>Last Name:</span> {profile?.lastName}</p>
            </div>
        );
    }
}


