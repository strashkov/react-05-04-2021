import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default class Profile extends React.Component {
  render() {
    return (
      <Card>
        <img
          src="img/filipp-romanovski-eejet4GDlzc-unsplash.jpg"
          alt="Photo by Filipp Romanovski on Unsplash"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Filipp Romanovski
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            My Route to Santiago de Compostela
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
