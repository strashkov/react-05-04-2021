import React from 'react';
import PropTypes from 'prop-types';
import '../styles/style.css';

export default class Profile extends React.Component {
    static propTypes = {
        url: PropTypes.string.isRequired,
        biografy: PropTypes.string.isRequired,
    };

    render() {
        const { url, biografy } = this.props;

        return (
            <div className="profile">
                <img src={url} alt=""/>
                <div> {biografy}</div>
            </div>
        );
    }
}