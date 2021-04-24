import React from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import "./style.css";

export default class Profile extends React.Component {
  static propTypes = {
    user: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      bio: PropTypes.string,
      photo: PropTypes.string,
    }),
  };
  render() {
    const { user } = this.props;
    return (
      <Card>
        <img
          src={"img/" + user.photo}
          alt="Photo by Filipp Romanovski on Unsplash"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {user.firstName}{user.lastName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {user.bio}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
