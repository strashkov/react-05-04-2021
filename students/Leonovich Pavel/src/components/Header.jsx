import React from 'react';
import PropTypes from 'prop-types';
import '../styles/style.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    };

    static defaultProps = {
        chatId: 1,
    };

    render() {
        return (
            <div className="header">
                Чат {this.props.chatId || 'не выбран'}
                <Link to={'/profile'}>
                            <Button color="inherit">Profile</Button>
                </Link>
            </div>
        );
    }
}