import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from "@material-ui/core/CircularProgress";
import './style.css';

export default class Header extends React.Component {
    static propTypes = {
        isLoading: PropTypes.bool,
        title: PropTypes.string.isRequired,
        profile: PropTypes.shape({
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired
        }).isRequired,
        loadProfile: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.loadProfile();
    }
    handleLinkClick = (link) => {
        this.props.push(link);
    };

    render() {
        const { profile, title, isLoading } = this.props;

        if (isLoading) {
            return <CircularProgress />;
        }
        return (
            <div className='header'>
                <div className='header-profile'>
                    <Link to='/profile'>
                        <div className='header-profile-container'>
                            <Avatar
                                className='header-profile-avatar'
                                onClick={() => {
                                    this.handleLinkClick(`/profile`);
                                }}>
                                {profile?.firstName?.charAt(0)}
                                {profile?.lastName?.charAt(0)}
                            </Avatar>
                            <div>
                                {profile?.firstName} {profile?.lastName}
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='header-title'>{title}</div>
            </div>
        );
    }
}
