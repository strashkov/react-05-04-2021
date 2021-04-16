import { Container, Grid } from "@material-ui/core";
import React from "react";
import ChatList from "./chatContent/ChatList/ChatList.jsx";

import MessageField from "./chatContent/messageField/MessageField.jsx";
import Header from "./header/Header.jsx";

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Container fixed>
          <Grid container m={1}>
            <Grid item xs={3}>
              <ChatList />
            </Grid>
            <Grid item xs={9}>
              <MessageField />
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}
export default Layout;
