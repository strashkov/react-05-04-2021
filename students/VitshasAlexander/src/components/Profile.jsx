import React from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default class Profile extends React.Component {
  static propTypes = {
    user: PropTypes.object,
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
            {user.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {user.bio}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
