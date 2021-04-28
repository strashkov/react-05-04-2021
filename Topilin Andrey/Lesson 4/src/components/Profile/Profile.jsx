import React from "react";
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';
import './profile.css';

export default class Profile extends React.Component {
    render() {
        return (
            <Container>
                <Card className='profile-card'>
                    <Avatar className='profile-avatar' src="https://i.pravatar.cc/300" />
                    <CardContent>
                        <Typography gutterBottom variant="h4">
                            Some Person
                        </Typography>
                        <Typography variant="body1">
                            Some text about Person
                        </Typography>
                    </CardContent>
                </Card>
                <Link to={'/chat/1'} className='profile-back'>НАЗАД</Link>
            </Container>
        );
    }
}