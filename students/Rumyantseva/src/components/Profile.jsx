import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default class Profile extends React.Component {
    render() {
        return (
            <div className="profile">
                <div className="profileBlock">Редактировать провиль</div>
                <Link className="btn" to={'/'}>
                    <Button variant="contained">К списку чатов</Button>
                </Link>

            </div>
        )
    }
}

