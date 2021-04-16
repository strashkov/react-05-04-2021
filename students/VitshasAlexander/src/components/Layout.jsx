import React from "react";

import Header from "./Header.jsx";
import MessageFields from "./MessageFields.jsx";

import Container from "@material-ui/core/Container";
import ChatList from "./ChatList.jsx";

export default class Layout extends React.Component {
  render() {
    return (
      <Container maxWidth="md">
        <Header />
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "50px"}}>
            <ChatList />
            <MessageFields />
        </div>
      </Container>
    );
  }
}
